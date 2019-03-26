const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectUserSchema=new Schema({
	collect:[]
})
module.exports=mongoose.model('CollectUser', CollectUserSchema);