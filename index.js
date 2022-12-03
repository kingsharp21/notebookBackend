const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const bodyParser = require('body-parser')
//connecting the routes
const routes = require('./routes/routes');

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use('/api', routes)



//connecting the db
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//connecting the server




app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})



