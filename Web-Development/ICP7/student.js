const mongoose = require('mongoose')


const student = new mongoose.Schema({
    firstName :String,
    lastName :String,
    age:Number,
    jioningDate:{
        type:Date,
        default:Date.now
    }
})

const newStudent  = mongoose.model('student',student)

module.exports ={newStudent}    