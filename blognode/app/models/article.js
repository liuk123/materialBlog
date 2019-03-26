const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId=Schema.Types.ObjectId

const ArticleSchema=new Schema({
	title:String,
    abstract:String,
	author:{type:ObjectId, ref:'User'},
	category:String,
	label:[],
	like:{type:ObjectId, ref:'Like'},
	commentNum:{ type:Number, default:0 },
	visitNum:{ type:Number, default:0 },
	content:String,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})

ArticleSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now()
	}else{
		this.meta.updateAt=Date.now()
	}
	next()
})

export default mongoose.model('Article', ArticleSchema);