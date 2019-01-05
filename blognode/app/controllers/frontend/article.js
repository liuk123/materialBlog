const UserModel = require('../../models/user')
const ArticleModel = require('../../models/article')
const CommentModel = require('../../models/comment')

class ArticleController {
    // 获取自己的文章列表
    static async get_list(ctx){
        const { id='', category='', current=0, pageSize=10 } = ctx.query

        const skip = Number(current)*Number(pageSize)
        let condition = { author: (id || ctx.session.user._id) }
        console.log(category)
        console.log('id ： '+ id)
        console.log(ctx.session.user._id)
        if( category !== 'all' ){
            condition.category = category
        }
        
        const result = await ArticleModel
                        .find(condition)
                        .sort({ createdAt: '-1' })
                        .skip(skip)
                        .limit(Number(pageSize))
                        .select('-content')
        
        return ctx.success({ msg:'获取成功', data: result });
    }
    // 新建
    static async create(ctx){
        const { userName, _id } = ctx.session.user
        const data = ctx.request.body
        if(!data) return ctx.error({ msg: '发送数据失败!' })

        data.author = _id
        if(data.newCategory) data.category = data.newCategory

        const result = await ArticleModel.create(data)
        if(!result) return ctx.error({ msg: '文章创建失败!' })

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
        const data = ctx.request.body
        if(!data) return ctx.error({ msg: '发送数据失败!' })
        if(data.newCategory){
            data.category=data.newCategory
        }
        const result = await ArticleModel.updateOne({_id: data.id}, data)
        
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
        const { id, category } = ctx.query
        if(!id) return ctx.error({ msg: '发送数据失败!' })

        const result = await ArticleModel.deleteOne({'_id': id})
        // if(!result) return ctx.error({ msg: '删除失败!' })

        const userResult = await UserModel.findOneAndUpdate(
            { _id: ctx.session.user._id, 'categories.title': category },
            { $inc: {'categories.$.number': -1} } )

        const commentResult = await CommentModel.deleteOne({ 'title': id })
        return ctx.success({ msg:'删除成功!' })
    }

    // 点赞
    static async like(ctx){
        const { titleId, liked } = ctx.request.body
        const { userName, _id } = ctx.session.user
        if(!_id) return ctx.error({ msg: '你还没有登录哦!' });

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
        const result = await ArticleModel.updateOne({ _id: titleId },condition)
        return ctx.success({ msg:'点赞成功!' })
        
    }

    // 获取
    static async get_detail(ctx){
        const { id } = ctx.query
        let liked = false
        const articleResult = await ArticleModel.findById(id).select('title content category like commentNum visitNum')
        if( articleResult &&
            articleResult.like &&
            articleResult.like.likeUser &&
            articleResult.like.likeUser.find(v=>v == ctx.session.user._id)) liked = true

        const commentResult = await CommentModel.find({ title: id})
                                                .populate({path:'from',select:{_id:1,userName:1}})
                                                .populate({path:'reply.from',select:{_id:1,userName:1}})
                                                .populate({path:'reply.to',select:{_id:1,userName:1}})
                                                .sort({_id:-1})

        await ArticleModel.updateOne({_id: id}, {$inc:{visitNum:+1}})

        ctx.success({ msg:'获取详情成功!',data: {articleResult, commentResult, liked} })
    }

    // 新建评论
    static async create_comment(ctx){
        const _comment = ctx.request.body
        const { userName, _id } = ctx.session.user
        if(_comment.cid){
            const result = await CommentModel.updateOne(
                { _id: _comment.cid },
                { '$push': { reply: { from: _id, to: _comment.to, content: _comment.content } }})

            if(!result)
                return ctx.error({ msg: '评论失败!' })

            await ArticleModel.updateOne({_id:_comment.title},{$inc:{commentNum:+1}})
            return ctx.success({ msg:'评论成功!' })
        }else{
            const result = await Comment.create({content:_comment.content, title:_comment.title, from:_id})
            if(!result)
                return ctx.error({ msg: '评论失败!' })

            await ArticleModel.updateOne({_id:_comment.title},{$inc:{commentNum:+1}})
            return ctx.success({ msg:'评论成功!', data: {fromId:result.from}})
        }
        
        
    }
}

export default ArticleController;