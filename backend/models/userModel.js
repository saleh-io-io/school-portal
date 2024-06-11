const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

//user can be a student or a teacher
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'teacher'],
        default: 'student'
    },

    password: {
        type: String,
        required: true
    }, 

    
})

userSchema.statics.signup = async  function(name, email, role, password){


    //validation
    if(!email || !name || !password || !role){
        throw new Error('All fields are required')

    }

    if(!validator.isEmail(email)){
        throw new Error('Invalid email')
    }

    if(!validator.isStrongPassword(password)){
        throw new Error('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number and one special character')
    }

    const exists = await this.findOne({email})

    if(exists){
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({email, name, role, password: hashedPassword});

    return user;
}

userSchema.statics.login = async function({email, password, role}){

    if(!email  || !password  ){
        throw new Error('All fields are required')

    }

    const user = await this.findOne({email, role})

    if(!user){
        throw new Error('either email or password is incorrect')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw new Error('either email or password is incorrect')
    }

    return user;
}

module.exports = mongoose.model('user', userSchema);