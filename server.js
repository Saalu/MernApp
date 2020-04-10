const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const Student = require('./models/student')
const PORT = process.env.PORT||5050
const app = express()
const studentRoutes = require('./routes/routes')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))

const MONGOURI ='mongodb+srv://saalih:123saalih@cluster0-ev4iz.mongodb.net/test?retryWrites=true&w=majority'




mongoose.connect('mongodb://localhost/mystudent' || MONGOURI, {useNewUrlParser:true, useUnifiedTopology:true , useFindAndModify:false})
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log('Error: ', err))
// mongoose.connection.on('connected', ()=>console.log('MongoDB connected'))

// Home route
app.get('/', (req,res)=>{
    res.send('<h1>Welcome to the Home page</h1>')
})

app.use('/api/', studentRoutes)

app.listen(PORT, console.log(`Server start on port: ${PORT}`))