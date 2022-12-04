const express = require('express');
const Model = require('../models/model');

const router = express.Router()

//Post Method
router.post('/savenote', (req, res) => {
     if (!req.body) {
        res.status(400).send({message:"content can not be empty!"})
        return;
    }
    const data = new Model({
        title: req.body.title,
        body: req.body.body
    })

    data.save()
    .then(data =>{
        res.json(data)
        console.log('data save');
        
    })
    .catch(err =>{
        console.log(err);
        res.json(err)
    })
})

//Get all Method
router.get('/getAll', (req, res) => {
    // res.send('Get All API')
     Model.find()
    .then((result) =>{
        res.send(result)
        return result
    })
    .catch((err) =>{
        console.log(err);
    })
})

