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

CommentSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}else{
		this.meta.updateAt=Date.now()
	}
	next()
})
export default mongoose.model('Comment', CommentSchema)