const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId=Schema.Types.ObjectId

const CommentSchema=new Schema({
	title:{type:ObjectId, ref:'Product'},
	from:{type:ObjectId, ref:'User'},
	reply:[{
        from:{type:ObjectId, ref:'User'},
        to:{type:ObjectId, ref:'User'},
        content:String,
	}],
	content:String,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})

export default mongoose.model('Comment', CommentSchema)