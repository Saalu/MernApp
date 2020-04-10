import React, { Component } from 'react'

export class Form extends Component {
    render() {
        const {city, country, handleChange,getWeather}=this.props
        return (
            <form onSubmit={getWeather}>

                <input type="text" name="city"  value={city}  onChange={handleChange} placeholder="City"></input>
                <input type="text" name="country" value={country} onChange={handleChange} placeholder="Country"></input>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
// value={country}