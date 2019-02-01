/*
* @ use 前端的接口配置 
* @ 逻辑层实现 /controllers/frontend/*
*/

import { UserController, ArticleController } from '../controllers/frontend.export'
// import upload from '../middlewares/upload'
const router = require('koa-router')()

router

    // 文章
    .post('/api/article/create', ArticleController.create)                                //新建文章
    .post('/api/article/update', ArticleController.update)                                //编辑文章
    .delete('/api/article/delete', ArticleController.delete)                              //删除文章
    .post('/api/article/like', ArticleController.like)                                    //点赞
    .get('/api/article/get_list', ArticleController.get_list)
    .get('/api/article/get_detail', ArticleController.get_detail)                        // 获取详情
    .get('/api/article/get_comment', ArticleController.get_comment) 
    .post('/api/article/comment', ArticleController.comment)                             // 发表评论
    

    // 用户
    .post('/api/user/logout',UserController.logout)                                       // 用户退出
    .post('/api/user/login',UserController.login)                                        // 用户登录
    .post('/api/user/register',UserController.register)                                  // 用户注册
    .get('/api/user/user_card',UserController.user_card)                                 // 用户信息
    // .post('/api/user/put_avatar', UserController.put_avatar)                           // 上传用户头像
    .post('/api/user/update_user',UserController.update_user)                               // 更新用户
    .delete('/api/user/del_category',UserController.del_category)                        //删除分类    
    


    
    .post('/api/uploadpic',ArticleController.upload_pic)                             // 编辑时上传照片
    // .post('/api/user/put_avatar', upload.alioss, UserController.put_avatar)           // 上传用户头像
    // .put('/api/user/put_userinfo',UserController.put_userinfo)

module.exports = router;