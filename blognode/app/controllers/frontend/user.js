import md5 from 'md5'

const UserModel = require('../../models/user')
const ArticleModel =  require('../../models/article')

class UserController {
    //注册
    static async register(ctx){
        const { userName, phone, password, repeat, invite, avatar } = ctx.request.body
        if(!userName||!password) {
            return ctx.error({ msg: '用户名或密码不能为空!' });
        }
        if(password!=repeat) {
            return ctx.error({ msg: '两次输入的密码不一致!' });
        }
        const ishas = await UserModel.findOne({ userName });
        if(ishas){
            return ctx.error({ msg: '该用户已存在!' });
        }
        const result = await UserModel.create({ userName, phone, password: md5(password), avatar });
        if(!result)
            return ctx.error({ msg: '注册失败!' });
            return ctx.success({ msg:'注册成功' });

    }
    //更新
    static async update_user(ctx){
        // const { userName, phone, password, repeat, avatar, introduce } = ctx.request.body
        const data = ctx.request.body
        if(data.password && data.password != data.repeat) {
            return ctx.error({ msg: '两次输入的密码不一致!' });
        }
        if(data.password) {
            data.password = md5(data.password)
        }
        const ishas = await UserModel.findOne({ userName: data.userName });
        if(ishas && ishas._id != ctx.session.user._id){
            return ctx.error({ msg: '该用户已存在!' });
        }
        const result = await UserModel.findByIdAndUpdate(
            ctx.session.user._id,
            data,
            {new: true}
        );
        if(!result)
            return ctx.error({ msg: '更新失败!' });
            return ctx.success({ msg:'更新成功',data: result });

    }

    //登录
    static async login(ctx){
        const { userName, password } = ctx.request.body
        if(!userName||!password) {
            return ctx.error({ msg: '获取用户失败!' })
        }
        console.log(userName)
        const data = await UserModel.findOne({ userName, password: md5(password) },{ password:0 })
        if(!data) return ctx.error({ msg: '用户名或密码错误!' })
        console.log(data)
        ctx.session.user = data
        // const id = data._id
        // const avatar = data.avatar
        // const keep_user = 604800000 // 7天

        // ctx.cookies.set('userid', id, { maxAge: keep_user,httpOnly: false });
        // ctx.cookies.set('username', userName, { maxAge: keep_user,httpOnly: false });
        // ctx.cookies.set('avatar', avatar, { maxAge: keep_user,httpOnly: false });
        ctx.success({ msg:'登录成功', data});
    }

    //退出
    static async logout(ctx) {
        const id = ctx.request.body;
 
        const cookie_userid = ctx.cookies.get('userid');
        if(!id) return ctx.error({ msg:'用户id不存在!' });
    
        const user = ctx.session.user;
        if(!user&&!cookie_userid) return ctx.error({ msg:'该用户已退出!' });
    
        ctx.session.user = null;
        ctx.cookies.set('userid',null);
        ctx.cookies.set('username',null);
        ctx.cookies.set('avatar',null);
    
        return ctx.success({ msg:'退出成功!' });
    }

    // 用户信息
    static async user_card(ctx) {
        const { id } = ctx.request.query;

        const result = await UserModel.findById( id || ctx.session.user._id);
        if(!result) return ctx.error({ msg: '获取用户信息失败!' });
        return ctx.success({ msg:'获取成功',data: result });
    }

    // 更新用户个人信息
    static async put_userinfo(ctx) {   
        const fields = ctx.request.body;
        if(!fields.id) return ctx.error({ msg: '用户id不存在!' });

        const id = fields.id;
        delete fields.id;
        const result = await UserModel.findByIdAndUpdate(id,fields);
        if(!result) return ctx.error({ msg: '更新失败!' });
        
        const user = await UserModel.findById(id).select({ password:0 });
        if(!user) return ctx.error({ msg: '返回用户失败!' });
        return ctx.success({ msg:'修改成功',data: { user } });
    }

    // 上传用户头像
    /*
    * 上传逻辑由中间件 /rest/middlewares/upload 统一处理
    * 此处只需处理上传的结果
    */
    static async put_avatar(ctx) {   
        const { url,id } = ctx.upload; 
        if(!url) return ctx.error({ msg:'上传失败!' });
        const updateavatar = await UserModel.findByIdAndUpdate(id,{ avatar: url });
        return ctx.success({ msg:'上传成功!',data: { url,id } });
    }

    //midware for user
    static async signinRequired(ctx,next) {
        var user=ctx.session.user
        if(!user){
            return res.json({code:0,msg:'没有登录'})
        }
        next()
    }
    //midware for user
    static async adminRequired(ctx,next) {
        var user=ctx.session.user
        if(user.role<=100||!user.role){
            return res.json({code:0,msg:'没有用户权限'})
        }
        next()
    }
}


export default UserController;