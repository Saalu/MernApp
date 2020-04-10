const express =require('express')
const router = express.Router()
const Employee = require('../model/employee')


router.get('/', (req,res)=>{
    Employee.find((err,doc)=>{
        err?  res.json(err)  : res.json(doc)

    })
})

router.get('/:id', (req,res)=>{
    Employee.findById(req.params.id, (err, doc)=>{
       
        err?  res.json(err)  : res.json({msg:doc})

    })

})

router.post('/', (req,res)=>{
    // console.log(req.body)

    const emp = new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    })
    emp.save()
      .then((doc)=>{res.json(doc)}) 
      .catch((err)=>res.json(err))

})


router.put('/:id', (req,res)=>{

    const upd = {
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    }

    Employee.findByIdAndUpdate(req.params.id, {$set:upd}, {new: true}, (err, doc)=>{
        err?  res.json(err)  : res.json({msg: doc})
    })

})

router.delete('/:id', (req,res)=>{
    Employee.findByIdAndRemove(req.params.id, (err, doc)=>{
        err?  res.json(err)  : res.json({msg: 'Deleted'})
    })

})

module.exports = router