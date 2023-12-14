//get user's tickets
//generate ticket
// update ticket
// get ticket detail

const Tickets = require('../models/ticketModel')
const Trips = require('../models/tripModel')



module.exports.GenerateTicket = function (req, res) {

    Tickets.find({ trip_id: req.body.trip_id, seat_num: req.body.seat_num }, function (err, ticket) {
        if (err) res.send
        if (ticket.length !== 0) {
            res.send('ticket already exists')
        }
        else {
            const newticket = new Tickets({
                user_id: req.body.user_id,
                trip_id: req.body.trip_id,
                price: req.body.price,
                seat_num: req.body.seat_num,
            })
        
            newticket.save(function (err) {
                if (err) throw err;

                let av
                Trips.find({ _id: req.body.trip_id }, function (err, trip) {
                    if (err) throw err;
                    av =trip[0].av_seats
                    var index = av.indexOf(req.body.seat_num);
                    if (index !== -1) {
                        av.splice(index, 1);
                    }
                    if (trip.length !== 0) {
                                Trips.updateOne({
                                    _id:req.body.trip_id 
                                  },
                                  {
                                     $set:{
                                        av_seats:av
                                     } 
                                   },(err,result)=>{
                                })                        
                    }
                })


                res.send({code:200})
            })
        }
    })

}


module.exports.getUserTickets = function (req, res) {
    Tickets.find({ user_id: req.params.user_id }, function (err, ticket) {
        if (ticket.length === 0) {
            res.send("invalid")
        }
        else {
           /* let obj = {
                _id: ticket[0]._id,
                user_id:ticket[0].user_id,
                trip_id: ticket[0].trip_id,
                price: ticket[0].price,
                seat_num: ticket[0].seat_num,
            }*/
            res.send(ticket)
        }
    })

}

module.exports.getTicketDetail = function (req, res) {
    Tickets.find({ _id: req.params._id }, function (err, ticket) {
        if (ticket.length === 0) {
            res.send("invalid")
        }
        else {
            let obj = {
                _id: ticket[0]._id,
                user_id:ticket[0].user_id,
                trip_id: ticket[0].trip_id,
                price: ticket[0].price,
                seat_num: ticket[0].seat_num,
            }
            res.send(obj)
        }
    })

}

module.exports.updateticket = function (req, res) {
    let oldticket
    Tickets.find({ _id: req.body._id }, function (err, ticket) {
        if (err) throw err;
        oldticket = ticket[0].seat_num
        if (ticket.length !== 0) {
                    Tickets.updateOne({
                        _id:req.body._id 
                      },
                      {
                         $set:{
                            user_id: req.body.user_id,
                            trip_id: req.body.trip_id,
                            price: req.body.price,
                            seat_num: req.body.seat_num,
                         } 
                       },(err,result)=>{
                    })
                    let av
                    Trips.find({ _id: req.body.trip_id }, function (err, trip) {
                        if (err) throw err;
                        av =trip[0].av_seats
                        var index = av.indexOf(req.body.seat_num);
                        if (index !== -1) {
                            av.splice(index, 1);
                        }
                        av.push(oldticket)
                        if (trip.length !== 0) {
                                    Trips.updateOne({
                                        _id:req.body.trip_id 
                                      },
                                      {
                                         $set:{
                                            av_seats:av
                                         } 
                                       },(err,result)=>{
                                    })                        
                        }
                    })
                    res.send('Sucess')
            
        }
        else {
            res.send('Ticket doesnt exist ')
        }
    })
}

