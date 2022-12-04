const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
//connecting the routes
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3030

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(cors({
    origin: '*'
}));
app.use('/api', routes)



//connecting the db
require('dotenv').config();

// const mongoString = process.env.DATABASE_URL
mongoose.connect('mongodb+srv://kingsharp:kingsharp@noteapp.nuiddpv.mongodb.net/?retryWrites=true&w=majority');
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//connecting the server




app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})



