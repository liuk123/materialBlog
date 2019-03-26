const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectArticleSchema=new Schema({
	collect:[]
})
module.exports=mongoose.model('CollectArticle', CollectArticleSchema);