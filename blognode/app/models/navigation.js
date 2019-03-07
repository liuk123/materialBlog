const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId=Schema.Types.ObjectId

const NavigationSchema=new Schema({
	title: String,
	data:[{type:ObjectId, ref:'NavigationItem'}],
	role:Number,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})
NavigationSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}else{
		this.meta.updateAt=Date.now()
	}
	next()
})
module.exports=mongoose.model('Navigation', NavigationSchema);