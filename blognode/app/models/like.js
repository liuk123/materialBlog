const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LikeSchema=new Schema({
	likeNum:{ type:Number, default:0 },
	likeUser:[]
})
module.exports=mongoose.model('Like', LikeSchema);