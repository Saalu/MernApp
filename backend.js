const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 7070
const app = express()
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', employeeRoutes)


app.get('/', (req,res)=>{res.send(`<h1>Welcome to the server port : ${PORT}</h1>`)})


mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/employeeDB',
{useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false}, ()=>
    console.log('MongoDB connected...!'))
    
// HTTP request logger
app.use(morgan('tiny'))



if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build')) 
}



app.listen(PORT, console.log(`Listen on port: ${PORT}`))