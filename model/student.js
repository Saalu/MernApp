const mongoose = require('mongoose')


const StudentSchema =mongoose.Schema({
    name:String,
    location:String,
    stage:Number,
    date:{
        type:Date,
        Default:Date.now()
    }
})

module.exports = mongoose.model('student_info', StudentSchema)