

const AdminModel =  require('../../models/admin')
const labelModel =  require('../../models/label')
const InviteModel =  require('../../models/invite')

class AdminController {

    static async label(ctx){
        const result = await labelModel.find()
        return ctx.success({ msg:'获取成功', data: result });
        return ctx.success({ msg:'标签成功!', data: [
            {name: '前端开发', items: ['前端开发','js','html/css','react','vue','angular','小程序','nodejs',]},
            {name: '后端开发', items: ['后端开发','java','python','爬虫','Go','c','c++']},
            {name: '数据库', items: ['数据库','mongodb','mySQL','redis']},
            {name: '个人', items: ['个人']},
            {name: '互联网', items: ['互联网']},
            {name: '资源', items: ['音乐','视频','软件','壁纸']},

        ]
    })
    }

    static async insertLabel(ctx){

        const data = [
            {name: '前端开发', items: ['前端开发','js','html/css','react','vue','angular','小程序','nodejs',]},
            {name: '后端开发', items: ['后端开发','java','python','爬虫','Go','c','c++']},
            {name: '数据库', items: ['数据库','mongodb','mySQL','redis']},
            {name: '个人', items: ['个人','笔记','散文']},
            {name: '互联网', items: ['互联网']},
            {name: '资源', items: ['音乐','视频','软件','壁纸']},

        ]
        console.log(data)
        const result = await labelModel.create(data)
        return ctx.success({ msg:'插入成功', data: result });
    }

    static async invite(ctx){
        let inviteArr = [];
        for(let i = 0; i < 50; i++){
            let num = ''
            for(let j = 0; j < 6; j++){
                num += Math.floor(Math.random()*10);
            }
            inviteArr.push({invite: num})
            num = null
        }
       
        const result = await InviteModel.create(inviteArr);
     
        inviteArr = null
        if(!result)
            return ctx.error({ msg: '添加失败!' });
            return ctx.success({ msg:'添加成功' });

    }
}

export default AdminController;