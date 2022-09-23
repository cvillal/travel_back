require('dotenv').config
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection
const MONGODB_URI  = process.env.MONGODB_URI 
const app = express();
const TravelCard = require('./models/travel-card.js');

//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;


app.use(express.json());
app.use(cors());
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));


// Connect to Mongo
mongoose.connect(MONGODB_URI, () => {
    console.log('whatever')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//=====ROUTES=====

// app.get('/' , (req, res) => {
//     res.send('Hello World!');
//   });

//delete
app.delete('/tc/:id', (req, res) => {
    TravelCard.findByIdAndRemove(req.params.id, (err, deletedTravelCard) =>{
        res.json(deletedTravelCard);
    })
})
//create
app.post('/tc', (req, res) => {
    TravelCard.create(req.body, (err, createdTravelCard) => {
        res.json(createdTravelCard)
    })
})

//read/index 
app.get('/tc', (req, res) => {
    TravelCard.find({}, (err, foundTravelCard)=>{
        res.json(foundTravelCard);
    })
})

//update
app.put('/tc/:id', (req, res) =>{
    TravelCard.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTravelCard) =>{
        res.json(updatedTravelCard);
    })
})



 
app.listen(PORT, () => console.log('listening on port:', PORT));
