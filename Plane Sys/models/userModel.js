const mongoose = require('mongoose')

let schema = mongoose.Schema;
let userSchema = new schema(({
  FirstName: String,
  LastName: String,
  BirthDate:String,
  Email:String,
  Password: String,

}))
let user = mongoose.model('user', userSchema)
module.exports = user