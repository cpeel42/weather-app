import './styles.css'
import { Weather } from './Weather.js'

const weatherSearchBar = document.querySelector('.weather-search')
const weatherSubmitButton = document.querySelector('.weather-submit')

weatherSubmitButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const weather = new Weather(weatherSearchBar.value)
    render(await weather.fetchWeather())
})

function render(result) {
    console.log(result)
    const address = result.resolvedAddress
    const temp = convertTemp(result.currentConditions.temp)
    const conditions = result.currentConditions.conditions
    const description = result.description
    const windSpeed = result.currentConditions.windspeed
    const windDir = convertWind(result.currentConditions.winddir)
    const clouds = result.currentConditions.cloudcover
    const precip = result.currentConditions.precipprob
    updateField('location', address)
    updateField('temperature-conditions', `${temp}° ${conditions}`)
    updateField('description', description)
    updateField('wind', `Wind Speed: ${windSpeed}MPH ${windDir}`)
    updateField('cloud-cover', `Cloud Cover: ${clouds}%`)
    updateField('pop', `Percentage of Precipitation ${precip}%`)
}

function updateField(className, text) {
    let field = document.querySelector(`.${className}`)
    field.textContent = text
}

function convertTemp(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9) 
} 

function convertWind(degrees) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const index = Math.floor((degrees + 11.25) / 22.5) % 16;
    console.log(index)
    return directions[index]
}





