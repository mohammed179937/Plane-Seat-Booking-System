const Trips = require('../models/tripModel')


//module.exports.getTrip
//module.exports.getAllTrips
//module.exports.AddTrip
//module.exports.UpdateTrip
//module.exports.DeleteTrip

module.exports.AddTrip = function (req, res) {

    Trips.find({ _id: req.body._id}, function (err, trip) {
        if (err) throw err;
        if (trip.length !== 0) {
            res.send('Trip already exists')
        }
        else {
            let av =[]
            for(let i = 1 ;i <= req.body.av_seats ; i++){
                av.push(i)
            }
            const newTrip = new Trips({
                to: req.body.to,
                from: req.body.from,
                dep_date: req.body.dep_date,
                dep_time: req.body.dep_time,
                duration: req.body.duration,
                price: req.body.price,
                av_seats: av,
            })
        
            newTrip.save(function (err) {
                if (err) throw err;
                res.send("Success")
            })
        }
    })
}


module.exports.getTrip = function (req, res) {
    Trips.find({ _id: req.params._id }, function (err, trip) {
        if (trip.length === 0) {
            res.send("invalid")
        }
        else {
            let obj = {
                _id: trip[0]._id,
                to:trip[0].to,
                from: trip[0].from,
                dep_date: trip[0].dep_date,
                dep_time: trip[0].dep_time,
                duration: trip[0].duration,
                price: trip[0].price,
                av_seats: trip[0].av_seats,
            }
            res.send(obj)
        }
    })

}

module.exports.getAllTrips = function (req, res) {
    Trips.find({ }, function (err, trips) {
        if (trips.length === 0) {
            res.send("invalid")
        }
        else {
           /* let output = []
            for (let i = 0 ; i <trips.length;i++){
                        output.push({
                            _id: users[i]._id,
                            username: value.username,
                            phone: value.phone,
                            profilePic: value.profilePic,
                            about: value.about,
                            DOB: value.DOB
                        })
               }*/
               res.send(trips)
        }
    })

}

module.exports.updateTrip = function (req, res) {

    Trips.find({ _id: req.body._id }, function (err, trip) {
        if (err) throw err;
        if (trip.length !== 0) {
                    Trips.updateOne({
                        _id:req.body._id 
                      },
                      {
                         $set:{
                            to: req.body.to,
                            from: req.body.from,
                            dep_date: req.body.dep_date,
                            dep_time: req.body.dep_time,
                            duration: req.body.duration,
                            price: req.body.price,
                         } 
                       },(err,result)=>{
                    })
                    res.send('Sucess')
            
        }
        else {
            res.send('Trip doesnt exist ')
        }
    })
}

