const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    name:String,
    position:String ,
    office: String, 
    salary:String ,
    date:{
        type:Date ,
        default:Date.now()
    }
})




module.exports = mongoose.model('employee', EmployeeSchema)