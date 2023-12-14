const mongoose = require('mongoose')

let schema = mongoose.Schema;
let ticketSchema = new schema(({
  user_id: String,
  trip_id: String,
  price:String,
  seat_num:Number,

}))
let ticket = mongoose.model('ticket', ticketSchema)
module.exports = ticket