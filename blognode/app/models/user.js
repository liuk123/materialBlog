const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId=Schema.Types.ObjectId

const UserSchema=new Schema({
	userName:{ unique:true, type:String },
	introduce:String,
	password:String,
	avatar:String,
	categories:[],
	collect:{type:ObjectId, ref:'CollectArticle'},	//收藏
	collectUser:{type:ObjectId, ref:'CollectUser'},	//关注
	label:[],
	theme:String,
	role:{ type:Number, default:0 },
	phone:Number,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})
UserSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}else{
		this.meta.updateAt=Date.now()
	}
	next()
})

module.exports=mongoose.model('User', UserSchema);