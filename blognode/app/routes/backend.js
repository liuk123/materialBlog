/*
* @ use 管理后台的接口配置 
* @ 逻辑层实现 /controllers/backend/*
*/

const router = require('koa-router')()
import { AdminController } from '../controllers/backend.export'

router
        .post('/api/admin/invite',AdminController.invite)
        .get('/api/article/label', AdminController.label)
        .post('/api/admin/insertLabel', AdminController.insertLabel)


module.exports = router;