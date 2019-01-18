const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema=new Schema({
	invite: String,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})

AdminSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}else{
		this.meta.updateAt=Date.now()
	}
	next()
})
module.exports=mongoose.model('Admin', AdminSchema);