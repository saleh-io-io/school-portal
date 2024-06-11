const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.JWT_SECRET, {
        expiresIn: "2d" 
    });
}

//login user
const loginUser = async (req, res) => {

    const {email, password ,role} = req.body;

    try {
        const user = await User.login({email: email, password: password,  role});
        const name = user.name;

        const token = createToken(user._id);
        res.status(200).json({email,name,role,
            token
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

//signup user
const signupUser = async (req, res) => {

    const {name, email, role, password} = req.body;

    try {
        const user = await User.signup(name, email, role, password);

        const token = createToken(user._id);
        res.status(201).json({email,role,name,
            token
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
    
}


module.exports = {loginUser, signupUser }