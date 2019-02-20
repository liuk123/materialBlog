const mongoose = require('mongoose')
const Schema = mongoose.Schema

const labelSchema=new Schema({
	name: String,
	items:[]
})
module.exports=mongoose.model('label', labelSchema);