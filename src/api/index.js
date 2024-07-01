
const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=1bb1816f7a58426887f115947242906&q='

export const getWeatherDataFromCityName = async (city) => {
    const response = await fetch(`${baseUrl}${city}&aqi=yes`)
    return await response.json()
}

export const getWeatherDataFromCurrentLocation = async (lat, lon) => {
    const response = await fetch(`${baseUrl}${lat},${lon}&aqi=yes`)
    return await response.json()
}