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
    })
    .catch((err) =>{
        console.log(err);
    })
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
   try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data._id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;