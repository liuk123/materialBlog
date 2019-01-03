const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema=new Schema({
	title:String,
    abstract:String,
	author:String,
	category:String,
	label:[],
	like:{
		likeNum:{ type:Number, default:0 },
		likeUser:[]
	},
	commentNum:{ type:Number, default:0 },
	visitNum:{ type:Number, default:0 },
	content:String,
	meta:{
		createAt:{ type:Date, default:Date.now() },
		updateAt:{ type:Date, default:Date.now() }
	}
})

export default mongoose.model('Article', ArticleSchema);