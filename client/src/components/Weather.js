import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        const {city, temperature, description, humidity, error,country}=this.props
        return (
            <div>
              Location:{city}, {country}
               Temperature: {temperature}
               Description: {description}
               Humidity: {humidity}
            </div>
        )
    }
}

export default Weather
