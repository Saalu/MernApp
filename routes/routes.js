const express = require('express')

const router = express.Router()
const Student = require('../model/student')


// routes
router.get('/', (req,res)=>{
    Student.find((err,doc)=>{
        err? res.json({msg:err})  :res.json({msg:doc})

    })
})

 router.put('/:id', (req,res)=>{
     const update = {
        name:req.body.name,
        location:req.body.location,
        stage:req.body.class,
     }
    Student.findByIdAndUpdate({_id:req.params.id}, {$set:update}, {new:true}, (err,doc)=>{
        err? res.json({msg:err})  :res.json({msg:doc})
    })

})


router.post('/', (req,res)=>{
    console.log(req.body)
    const std = new Student({
        name:req.body.name,
        location:req.body.location,
        stage:req.body.class,
    })
    std.save((err,doc)=>{
        err? res.json({msg:'save failed'})  :res.json({msg:doc})

    })
})


router.delete('/:id', (req,res)=>{
    Student.findByIdAndRemove(req.params.id, (err,doc)=>{
        err? res.json({msg:'delete failed'})  :res.json({msg:'deleted successfully'})

    })
})
// app.post('/', (req,res)=>{})








module.exports = router