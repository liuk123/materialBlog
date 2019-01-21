

const InviteModel =  require('../../models/invite')

class InviteController {
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

export default InviteController;