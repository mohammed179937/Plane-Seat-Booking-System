const express = require("express");

const tripController = require("../controllers/tripController");

//var cors = require('cors')

const router = express.Router();

//router.use(cors());
//router.options('*', cors());

router.get('/getAllTrips', tripController.getAllTrips)
router.get('/getTrip/:_id', tripController.getTrip)
router.post('/AddTrip', tripController.AddTrip)
router.post('/updateTrip', tripController.updateTrip)

module.exports = router;