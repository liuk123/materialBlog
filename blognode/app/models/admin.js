const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema=new Schema({
	invite: String,
})
module.exports=mongoose.model('admin', AdminSchema);