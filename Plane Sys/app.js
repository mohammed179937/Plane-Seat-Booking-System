const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('./config');

const port = process.env.PORT || 3000;
mongoose.connect(config.getDbConnectionString());

const app = express();


const ticketRoutes = require('./routes/ticket')
const tripRoutes = require('./routes/trip')
const userRoutes = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.options('*', cors());

app.use('/api/ticket',ticketRoutes)
app.use('/api/trip',tripRoutes)
app.use('/api',userRoutes)

app.listen(port);