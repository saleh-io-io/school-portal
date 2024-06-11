const express = require('express');
const { createCourse, getCourses, deleteCourse, updateCourse } = require('../controllers/courseController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// requireAuth middleware is used to protect the route
router.use(requireAuth);

router.get('/', getCourses);

router.post('/', createCourse);


router.get('/:id', (req, res) => {
    res.json({
        message: 'get single  course!'
    })
});


router.delete('/:id', deleteCourse);


router.patch('/:id', updateCourse);

module.exports = router;