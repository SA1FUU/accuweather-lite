import React, { useState } from 'react'
import { useWeather } from '../context/Weather'

export default function Input() {


    const weather = useWeather()

    const handleSubmit = (e) => {
        e.preventDefault()
        weather.fetchWeatherData()
            .then(() => weather.setSearchCity(''))
    }

    return (
        <form className="container-input" onSubmit={handleSubmit}>
            <input
                type="text"
                value={weather.searchCity}
                onChange={e => weather.setSearchCity(e.target.value)}
                placeholder="Search Weather"
                className="input" />
        </form>
    )
}
