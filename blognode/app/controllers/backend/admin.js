

const AdminModel =  require('../../models/admin')

class AdminController {
    static async invite(ctx){
        const { id, ishas } = ctx.request.body
        let invateArr = [];
        for(let i = 0; i < 50; i++){
            let num = ''
            for(let j = 0; j < 6; j++){
                num += Math.floor(Math.random()*10);
            }
            invateArr.push(num)
            num = ''
        }
        let result
        if(ishas == 1){
            result = await AdminModel.updateOne({ id }, { invite: invateArr });
        }else{
            result = await AdminModel.create({ invite: invateArr });
        }
        invateArr = null
        if(!result)
            return ctx.error({ msg: '添加失败!' });
            return ctx.success({ msg:'添加成功' });

    }
}

export default AdminController;