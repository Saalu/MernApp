import React, { Component } from 'react'
import Weather from './components/Weather'
import Titles from './components/Titles'
import Form from './components/Form'

import axios from 'axios'
const API_KEY='ea131d061d228469df6ac93db8071ab5'

export class App extends Component {

  state={
    city:'',
    country:'',
    temperature:'',
    humidity:'',
    description:'',
    error:''
  }

handleChange=(e)=>{
  this.setState({ [e.target.name]: e.target.value })
}

getWeather =(e)=>{
  e.preventDefault()

  const city = e.target.elements.city.value
  const country = e.target.elements.city.value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
  .then(res=>res.json())
  .then(data=>{
    this.setState({
      city:data.name,
      country:data.sys.country,
      temperature:data.main.temp,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })
    
  }
    
   )
  .catch(err=>console.log('Error: ', err))


 
}
  render() {
    const {city, temperature, description, humidity, error,country}=this.state
    return (
      <div>
        <Titles/>
        <Form
        getWeather={this.getWeather}
        city={city}
        country={country}
        handleChange={this.handleChange}
        />
        <Weather
        city={city}
        country={country}
        temperature={temperature}
        description={description}
        humidity={humidity}
        error={error}
        />
      </div>
    )
  }
}

export default App
