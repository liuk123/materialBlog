const UserModel = require('../../models/user')
const ArticleModel = require('../../models/article')
const CommentModel = require('../../models/comment')

var fs = require('fs');
var path = require('path');

class ArticleController {
    // 获取文章列表
    static async get_list(ctx){
        const { id='', category='', collect='', current=0, pageSize=10 } = ctx.query
        if( !id && !ctx.session.user ) return ctx.error({ msg: '请登录' })
        const skip = Number(current)*Number(pageSize)

        if(collect != ''){
            // const userResult = await UserModel.findById(id).select('collect -_id')
            // if(!userResult) return ctx.error({ msg:'收藏内容为空' });
  
            const result = await ArticleModel
                            .find({'_id': {$in: collect.split(',')}})
                            .sort({ 'meta.createAt': -1 })
                            .skip(skip)
                            .limit(Number(pageSize))
                            .select('-content')
            
            return ctx.success({ msg:'获取成功', data: result });
            
        }else{
            let condition = {}
            if( category !== 'all' ){
                condition.category = category
            }
            if( id != 'all'){
                condition.author = id || ctx.session.user._id
            }
            
            const result = await ArticleModel
                            .find(condition)
                            .sort({ 'meta.createAt': -1 })
                            .skip(skip)
                            .limit(Number(pageSize))
                            .select('-content')

            return ctx.success({ msg:'获取成功', data: result });
        }
        
        
    }
    // 新建
    static async create(ctx){

        if( !ctx.session.user ) return ctx.error({ msg: '请登录' })

        const { userName, _id } = ctx.session.user
        const data = ctx.request.body
        if(!data) return ctx.error({ msg: '发送数据失败!' })

        data.author = _id
        if(data.newCategory) data.category = data.newCategory

        const result = await ArticleModel.create(data)

        if(data.newCategory){// 新建分类
            const hasCatResult = await UserModel.findByIdAndUpdate(
                    _id,
                    { '$push': {categories: { title: data.newCategory, number:1 }} },
                    { new: true })
            
        }else{// 更新分类
            const noCatResult = await UserModel.findOneAndUpdate(
                    { _id, 'categories.title':data.category },
                    { $inc:{'categories.$.number':+1} })

        }

        return ctx.success({ msg:'新建成功!' })
    }

   

    // 更新 -分类待优化
    static async update(ctx){

        if( !ctx.session.user ) return ctx.error({ msg: '请登录' })

        const data = ctx.request.body
        if(!data) return ctx.error({ msg: '发送数据失败!' })
        if(data.newCategory){
            data.category=data.newCategory
        }
        const result = await ArticleModel.updateOne({_id: data._id}, data)
        
        if(data.newCategory){
            await UserModel.updateOne(
                { _id: ctx.session.user._id },
                { $push: {categories: { title: data.newCategory, number:1 }}})
            await UserModel.updateOne(
                { _id: ctx.session.user._id, 'categories.title': data.oldCategory },
                { $inc: {'categories.$.number': -1} })
        }else{
            await UserModel.updateOne(
                { _id: ctx.session.user._id, 'categories.title': data.oldCategory },
                { $inc: {'categories.$.number': -1} })
                
            await UserModel.updateOne(
                { _id: ctx.session.user._id, 'categories.title': data.newCategory },
                { $inc: {'categories.$.number': +1} })
        }

        return ctx.success({ msg:'更新成功!' })

    }

    // 删除
    static async delete(ctx){

        if( !ctx.session.user ) return ctx.error({ msg: '请登录' })

        const { id, category } = ctx.query
        if(!id) return ctx.error({ msg: '删除失败' })

        const result = await ArticleModel.deleteOne({'_id': id})

        const userResult = await UserModel.findOneAndUpdate(
            { _id: ctx.session.user._id, 'categories.title': category },
            { $inc: {'categories.$.number': -1} } )

        const commentResult = await CommentModel.deleteMany({ 'title': id })

        return ctx.success({ msg:'删除成功!' })
    }

    // 点赞
    static async like(ctx){

        if( !ctx.session.user ) return ctx.error({ msg: '请登录' })

        const { id, liked } = ctx.request.body
        const { userName, _id } = ctx.session.user

        let condition={}
        if(liked==1){
            condition = { 
                $pull: { 'like.likeUser': _id },
                $inc: { 'like.likeNum': -1 }
            }
        }else{
            condition = { 
                $push: { 'like.likeUser': _id },
                $inc: { 'like.likeNum': +1 }
            }
        }
        const result = await ArticleModel.updateOne({ _id: id },condition)
        
        return ctx.success({ msg:'点赞成功!', data: (liked == 1 ? 0:1) })
        
    }

    // 获取
    static async get_detail(ctx){
        const { id } = ctx.query
        let liked = 0
        const result = await ArticleModel.findById(id).select('title abstract content category like commentNum visitNum author label')
        if( ctx.session.user &&
            ctx.session.user._id &&
            result &&
            result.like &&
            result.like.likeUser &&
            result.like.likeUser.find(v=>v == ctx.session.user._id)) liked = 1

        const commentResult = await CommentModel
            .find({ title: id})
            .populate({path:'from',select:{_id:1,userName:1}})
            .populate({path:'reply.from',select:{_id:1,userName:1}})
            .populate({path:'reply.to',select:{_id:1,userName:1}})
            .sort({_id:-1})

        await ArticleModel.updateOne({_id: id}, {$inc:{visitNum:+1}})

        ctx.success({ msg:'获取详情成功!',data: result })
    }

    // 获取评论
    static async get_comment(ctx){
        const { id } = ctx.query

        const result = await CommentModel
            .find({ title: id})
            .populate({ path: 'from', select: { _id:1, userName: 1, avatar: 1 }})
            .populate({ path: 'reply.from', select: { _id: 1, userName: 1, avatar: 1 }})
            .populate({ path: 'reply.to', select: { _id:1, userName: 1, avatar: 1 }})
            .sort({ _id: -1 })

        ctx.success({ msg:'获取详情成功!',data: result })
    }

    // 新建评论
    static async comment(ctx){
        
        if( !ctx.session.user ) return ctx.error({ msg: '请登录' })

        const _comment = ctx.request.body
        const { userName, _id } = ctx.session.user

        if(_comment.cid){
            const result = await CommentModel.updateOne(
                { _id: _comment.cid },
                { '$push': { reply: { from: _id, to: _comment.to, content: _comment.content } }})


            await ArticleModel.updateOne({_id:_comment.title},{$inc:{commentNum:+1}})
            return ctx.success({ msg:'评论成功!' })
        }else{
            const result = await CommentModel.create({content:_comment.content, title:_comment.title, from:_id})

            await ArticleModel.updateOne({_id:_comment.title},{$inc:{commentNum:+1}})
            return ctx.success({ msg:'评论成功!', data: {fromId:result.from}})
        }
        
        
    }

    //上传图片
    static async upload_pic(ctx){

        const today = new Date();
        const folder = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
        const dirname = path.join(__dirname,'../../../','/public/api/upload/'+folder)
        if (mkdirsSync(dirname, '0777')) {
            const file = ctx.request.files.file;
            const fileName = new Date().getTime() + "." + file.name.split('.')[file.name.split('.').length - 1];
            const newPath = dirname + "/" + fileName;
            // const result = await fs.rename(file.path, newPath);
            const readStream = fs.createReadStream(file.path)
            const writeStream = fs.createWriteStream(newPath)
            readStream.pipe(writeStream)
            ctx.body=JSON.stringify({fileName: '/upload/' + folder + "/" + fileName})
        } else {
            console.error('error')
        }
    }

//    static async label(ctx){
//         return ctx.success({ msg:'标签成功!', data: [
//                 {name: '前端开发', items: ['前端开发','js','html/css','react','vue','angular','小程序','nodejs',]},
//                 {name: '后端开发', items: ['后端开发','java','python','爬虫','Go','c','c++']},
//                 {name: '数据库', items: ['数据库','mongodb','mySQL','redis']},
//                 {name: '个人', items: ['个人']},
//                 {name: '互联网', items: ['互联网']},
//                 {name: '资源', items: ['音乐','视频','软件','壁纸']},

//             ]
//         })
//    }
    static async collect(ctx){
        if(!ctx.session.user) return ctx.error({ msg:'请登录' })
        const id = ctx.request.body

        const result = await UserModel.updateOne(
            { _id: ctx.session.user._id },
            { $addToSet: {collect: id}})

        return ctx.success({ msg:'收藏成功!' })

    }
    static async collectUser(ctx){
        if(!ctx.session.user) return ctx.error({ msg:'请登录' })
        const { id } = ctx.request.body
      
        const result = await UserModel.updateOne(
            { _id: ctx.session.user._id },
            { $addToSet: {collectUser: id}})

        return ctx.success({ msg:'关注成功!' })

    }
}

export default ArticleController;



function mkdirsSync(dirpath, mode) {
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        dirpath.split(path.sep).forEach(function (dirname) {
            if (dirname == "") {
                dirname = "/"
            }
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            } else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                if (!fs.mkdirSync(pathtmp, mode)) {
                    return false;
                }
            }
        });
    }
    return true;
}