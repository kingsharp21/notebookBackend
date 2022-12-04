const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        required: true,
        type : Date, 
        default: Date.now
    }
    
})


module.exports = mongoose.model('Data', dataSchema)