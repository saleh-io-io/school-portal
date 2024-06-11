require('dotenv').config();

const courseRoutes = require('./routes/courses');
const userRoutes = require('./routes/user');

const express = require('express'); 
const mongoose = require('mongoose');   

const cors = require('cors');

const app = express();

//mmiddleware
app.use(express.json());
app.use(cors());

app.use( '/api/courses',courseRoutes);
app.use('/api/user', userRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server started cat', process.env.PORT);
});


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to db');



}
).catch((err) => {
    console.log('Error connecting to db', err);
});