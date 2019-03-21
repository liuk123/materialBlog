const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NavigationItemSchema=new Schema({
	name: String,
	desc: String,
	url: String,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})
NavigationItemSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}else{
		this.meta.updateAt=Date.now()
	}
	next()
})
module.exports=mongoose.model('NavigationItem', NavigationItemSchema);