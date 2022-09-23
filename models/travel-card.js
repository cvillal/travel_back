const mongoose = require('mongoose');

const tcSchema = new mongoose.Schema({
    image: String,
    place: String,
    stay: Boolean,
    link: String,
    notes: String,
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    username: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lng: {
        type: Number,
        required: true,
    },
})



const TravelCard = mongoose.model('tc', tcSchema);

module.exports = TravelCard;