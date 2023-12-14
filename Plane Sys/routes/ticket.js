const express = require("express");

const tripController = require("../controllers/ticketController");

//var cors = require('cors')

const router = express.Router();

//router.use(cors());
//router.options('*', cors());

router.post('/GenerateTicket', tripController.GenerateTicket)
router.get('/getUserTickets/:user_id', tripController.getUserTickets)
router.get('/getTicketDetail/:_id', tripController.getTicketDetail)
router.post('/updateticket', tripController.updateticket)

module.exports = router;