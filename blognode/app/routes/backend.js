/*
* @ use 管理后台的接口配置 
* @ 逻辑层实现 /controllers/backend/*
*/

const router = require('koa-router')()
import { InviteController } from '../controllers/backend.export'

router
        .post('/api/admin/invite',InviteController.invite)


module.exports = router;