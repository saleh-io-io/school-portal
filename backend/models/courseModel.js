const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
 
    description: {
        type: String,
        required: true
    },

    teacher: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
},
    {timestamps: true}

)

module.exports = mongoose.model('Course', courseSchema);