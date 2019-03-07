const NavigationModel = require('../../models/navigation')
const NavigationItemModel = require('../../models/navigationItem')

//
class NavigationController {
    static async get_recommend_navigation(ctx){
        const result = await NavigationModel
                        .find()
                        .populate('data')
                        .sort({ 'role':  1})
        return ctx.success({ msg:'获取成功', data: result });
    }
    static async create_recommend_navigation(ctx){

        const data = ctx.request.body
        if(data.title){
            const result = await NavigationModel.create({title: data.title, role: data.role, data:[]})
            return ctx.success({ msg:'创建成功'});
        }else{
            const result = await NavigationItemModel
                    .create({
                        name: data.name,
                        desc: data.desc,
                        url: data.url,
                        ico: data.ico,
                    })
            const resultNav = await NavigationModel.update(
                    {_id: data._id},
                    {'$push':{data:result._id}})

            return ctx.success({ msg:'创建成功'});
        }

    }
}

export default NavigationController;