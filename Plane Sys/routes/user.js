const express = require("express");

const userController = require("../controllers/userController");

//var cors = require('cors')

const router = express.Router();

//router.use(cors());
//router.options('*', cors());

router.get('/AuthenticateUser/:Email/:Password', userController.AuthenticateUser)
router.get('/getUser/:_id', userController.getUser)
router.post('/RegisterUser', userController.RegisterUser)
router.post('/updateUser', userController.updateUser)

module.exports = router;