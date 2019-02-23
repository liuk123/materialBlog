const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema=new Schema({
	userName:{ unique:true, type:String },
	introduce:String,
	password:String,
	categories:[],
	avatar:String,
	collect:[],
	collectUser:[],
	label:[],
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