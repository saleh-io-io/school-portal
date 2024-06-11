const Course = require('../models/courseModel');
const mongoose = require('mongoose');


//get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).sort({createdAt: -1});
        res.status(200).json({
            message: 'All courses',
            courses
        });
        console.log('All courses', courses);
    }
    catch (err) {
        console.log('Error getting courses', err);
        res.status(500).json({
            message: 'Error getting courses',
            error: err.message  
        });
    }
};

//create new a course
const createCourse = async (req, res) => {
    const {name, description, teacher, startDate, endDate} = req.body;
console.log(name , description, teacher, startDate, endDate);
    // add a doc to db
    try {
        const course = await Course.create({
            name,
            description,
            teacher,
            startDate,
            endDate
        });
        res.status(201).json({
            message: 'Course created',
            course
        });
        console.log('Course created', course);
    }
    catch (er) {
        console.log('Error creating course', er); 
        res.status(400).json({
            message: 'Error creating course',
            error: er.message
        });
    }
};

//delete a course
const deleteCourse = async (req, res) => {
    try {

        if(!mongoose.Types.ObjectId.isValid(req.params.id) ) {
            
            return res.status(400).json({
                message: 'Invalid course id'
            });
            
        }
        const course = await Course.findOneAndDelete(req.params.id);
        res.status(200).json({
            message: 'Course deleted',
            course
        });
        console.log('Course deleted', course);
    }
    catch (err) {
        console.log('Error deleting course', err);
        res.status(500).json({
            message: 'Error deleting course',
            error: err.message
        });
    }
}

//update a course
const updateCourse = async (req, res) => {
    
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id) ) {
            
            return res.status(400).json({
                message: 'Invalid course id'
            });
            
        }
        const course = await Course.findOneAndUpdate({
            _id: req.params.id
        }, {
            ...req.body
        }
        )

        res.status(200).json({
            message: 'Course updated',
            course
        });
    }
    catch (err) {
        console.log('Error updating course', err);
        res.status(500).json({
            message: 'Error updating course',
            error: err.message
        });
    }
}


module.exports = {
    createCourse ,
    getCourses,
    deleteCourse,
    updateCourse
}
