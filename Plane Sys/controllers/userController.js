const Users = require('../models/userModel')


module.exports.AuthenticateUser = function (req, res) {
    Users.find({ Email: req.params.Email, Password: req.params.Password }, function (err, user) {
        if (err) throw err;
        if (user.length === 0) {
            res.send('invalid')
        }
        else {
            let obj = {
                _id: user[0]._id,
                FirstName:user[0].FirstName ,
                LastName: user[0].LastName,
                BirthDate: user[0].BirthDate,
                Email: user[0].Email,
            }
            res.send(obj)
        }
    })
}

module.exports.RegisterUser = function (req, res) {

    Users.find({ Email: req.body.Email, Password: req.body.Password }, function (err, user) {
        if (err) throw err;
        if (user.length !== 0) {
            res.send('user already exists')
        }
        else {
            const newUser = new Users({
                FirstName: req.body.FirstName ,
                LastName:  req.body.LastName,
                BirthDate:  req.body.BirthDate,
                Email:  req.body.Email,
                Password: req.body.Password,
            })
        
            newUser.save(function (err) {
                if (err) throw err;
                res.send({code:200})
            })
        }
    })
}


module.exports.getUser = function (req, res) {
    Users.find({ _id: req.params._id }, function (err, user) {
        if (err || user.length === 0) {
            res.send("invalid")
        }
        else {
            let obj = {
                _id: user[0]._id,
                FirstName:user[0].FirstName,
                LastName: user[0].LastName,
                BirthDate: user[0].BirthDate,
                Email: user[0].Email,
                Password: user[0].Password,
            }
            res.send(obj)
        }
    })

}

module.exports.updateUser = function (req, res) {

    Users.find({ _id: req.body._id }, function (err, user) {
        if (err) throw err;
        if (user.length !== 0) {
                    Users.updateOne({
                        _id:req.body._id 
                      },
                      {
                         $set:{
                            FirstName: req.body.FirstName ,
                            LastName:  req.body.LastName,
                            BirthDate:  req.body.BirthDate,
                            Email:  req.body.Email,
                            Password: req.body.Password,
                         } 
                       },(err,result)=>{
                    })
                    res.send('Sucess')
            
        }
        else {
            res.send('User doesnt exist ')
        }
    })
}

