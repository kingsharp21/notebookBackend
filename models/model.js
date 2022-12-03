const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    title: {
        type: Number,
        required: true
    },
    body: {
        type: Number,
        required: true
    }
    // date: {
    //     required: true,
    //     type: Date
    // }
    
})


module.exports = mongoose.model('Data', dataSchema)