import React, { Component } from 'react'
import axios from 'axios'
import  './App.css'
import StudentInfo from './components/StudentInfo'
export class App extends Component {
  state={
    name:'',
    email:'',
    age:'',
    location:'',
    posts:[]
  }

  componentDidMount=()=>{
    this.getStudentInfo()
  }


  
  getStudentInfo=()=>{
    axios.get('/api')
    .then((res)=> {
      const data = res.data
      this.setState({posts:data})
      console.log('Data received: ')
    })
.catch(console.log('Error retrieving data'))
  
}



  // 
  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    // console.log(e.target)
  }

  resetInputs=()=>{
    this.setState({
      name:'',
      email:'',
      age:'',
      location:'',
    })
  }

  submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state)

    const payload ={
      name:this.state.name,
    email:this.state.email,
    age:this.state.age,
    location:this.state.location
    }

    axios.post('/api', this.state)
    .then((data)=>{console.log('Data sent:', data)})
    .catch((err)=>{console.log('Error: ', err)})
    // axios({
    //     url:'/api',
    //     method:'POST',
    //     data:payload
    // })
    // .then((data)=>{console.log('Data sent:', data)})
    // .catch((err)=>{console.log('Error: ', err)})

   
  }

  render() {

  const {name,posts, email,age,location}=this.state
    return (
      <div className="App">
        
        <form onSubmit={this.submitHandler}>
        <div>
          <label>Name</label>
          <input type="text" 
          name="name"
          value={name}
          onChange ={this.changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input type="text" 
          name="email"
          value={email}
          onChange ={this.changeHandler}
          />
        </div>
        <div>
          <label>Age</label>
          <input type="text" 
          name="age"
          value={age}
          onChange ={this.changeHandler}
          />
        </div>
        <div>
          <label>Location</label>
          <input type="text" 
          name="location"
          value={location}
          onChange ={this.changeHandler}
          />
        </div>

          <button type="submit">Submit</button>
        </form>

        <StudentInfo posts={posts}/>
      </div>
    )
  }
}

export default App
