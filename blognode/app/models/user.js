const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema=new Schema({
	userName:{ unique:true, type:String },
	introduce:String,
	password:String,
	categories:[],
	avatar:String,
	label:[],
	role:{ type:Number, default:0 },
	phone:Number,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})


module.exports=mongoose.model('User', UserSchema);