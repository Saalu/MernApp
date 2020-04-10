import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import  EmpList from './components/EmpList'
 class App extends Component {

  state={
    name:'',
    position:'',
    office:'',
    salary:'',
    posts:[]

  }
componentDidMount(){
this.getPost()
}
getPost = ()=>{
  axios.get('/api')
  .then((res)=>{
   const data = res.data
  this.setState({posts: data})
   console.log('Data received: ', data)
  })
 
  .catch((err)=>console.log(err))
}

resetInput = ()=>{
  this.setState({
    name:'',
    position:'',
    office:'',
    salary:'',
    posts:[]
  })
}
  handleChange=e=>{

this.setState({[e.target.name]:e.target.value})
  }

  submitHandler=e=>{
e.preventDefault()
    axios.post('/api/', this.state)
    .then((res)=>console.log(res))
    .catch((err)=>console.log('Error: ', err))

    this.resetInput()
    this.getPost()
  }

  

  render() {

    const {name,office, position,posts, salary}=this.state
    return (
      <div className="App">
        
       <form onSubmit={this.submitHandler}>
       <div>
          <label>Name</label>
          <input
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Position</label>
          <input
          type="text"
          value={position}
          name="position"
          onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Office</label>
          <input
          type="text"
          value={office}
          name="office"
          onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
          type="text"
          value={salary}
          name="salary"
          onChange={this.handleChange}
          />
        </div>
      <button type="submit" >Submit</button>
       </form>

       <EmpList  posts ={posts} />
      </div>
    )
  }
}

export default App
