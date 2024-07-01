import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCityName, getWeatherDataFromCurrentLocation } from "../api";

// weather context

const WeatherContext = createContext(null)

// custom hook to use Weather Context

export const useWeather = () => {
    return useContext(WeatherContext)
}

// Context provider


export const WeatherProvider = (props) => {

    const [weatherData, setWeatherData] = useState(null)
    const [searchCity, setSearchCity] = useState('')

    const fetchWeatherData = async () => {
        const response = await getWeatherDataFromCityName(searchCity)
        setWeatherData(response)
    }

    const fetchDataFromLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataFromCurrentLocation(position.coords.latitude, position.coords.longitude)
            .then((data) => setWeatherData(data))
        })
    }

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData, searchCity, setSearchCity, fetchWeatherData, fetchDataFromLocation }}>
            {props.children}
        </WeatherContext.Provider>
    )
}