const mongoose = require('mongoose')

let schema = mongoose.Schema;
let tripSchema = new schema(({
  to: String,
  from: String,
  dep_date:String,
  dep_time:String,
  duration: String,
  price: Number,
  av_seats:[ { type: Number } ],

}))
let trip = mongoose.model('trip', tripSchema)
module.exports = trip