import React, { useEffect } from 'react'
import Input from './Input'
import { useWeather } from '../context/Weather'

export default function Card() {

    const weather = useWeather()

    useEffect(() => {
        weather.fetchDataFromLocation()
    }, [])

    return (
        <div className='card'>
            <h1 className='heading'>Accuweather Lite</h1>
            <Input />

            <p className='city'>
                {`${weather?.weatherData?.location?.name || 'City'}, ${weather?.weatherData?.location?.country || 'Country'}`}
            </p>

            <div className="temp-div">
                <p>{Math.round(weather?.weatherData?.current?.temp_c ) || 37}°C</p> <hr />
                <p>{Math.round(weather?.weatherData?.current?.temp_f) || 98.6}°F</p>
            </div>

            <p className='feels'>
                <span>Feels Like - </span>
                {Math.round(weather?.weatherData?.current?.feelslike_c) || 40}°C
            </p>

            <p className='condition'>
                {weather?.weatherData?.current?.condition?.text || 'Condition'}
            </p>

            <div className="wind-div">
                <p> <span>Wind - </span>
                    {Math.round(weather?.weatherData?.current?.wind_kph) || '20'} KM/H
                </p>
                <p> <span>Humidity - </span>
                    {weather?.weatherData?.current?.humidity || 20}
                </p>
            </div>

            <p className='last-updated'>
                <span>Last Updated On </span> 
                - { weather?.weatherData?.current?.last_updated || '01-01-2024 | 12:00'}
            </p>

        </div>
    )
}
