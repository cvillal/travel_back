require('dotenv').config
const express = require('express');
const mongoose = require('mongoose');
// const methodOverride  = require('method-override');
const cors = require('cors');
const db = mongoose.connection
const MONGODB_URI  = process.env.MONGODB_URI 
const app = express();

//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;
// const ENV = process.env
// console.log(ENV.MONGODB_URI)

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

//ROUTES



app.get('/' , (req, res) => {
    res.send('Hello World!');
  });






//   mongoose.connect(MONGODB_URI)
//   mongoose.connection.once('open', ()=>{
//       console.log('connected to mongod...');
//   });


 

app.listen(PORT, () => console.log('listening on port:', PORT));
