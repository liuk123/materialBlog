const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InviteSchema=new Schema({
	invite: String,
})
module.exports=mongoose.model('Invite', InviteSchema);