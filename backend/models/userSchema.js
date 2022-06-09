const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
//const Claim = require('./UserClaims')

const userClaims = new mongoose.Schema({

})

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
 
}, {
  timestamps: true,
})


module.exports = mongoose.model('User', userSchema)
