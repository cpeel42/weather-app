import './styles.css'
import { Giphy } from './Giphy.js'
import { Weather } from './Weather.js'

const giphySearchBar = document.querySelector('.giphy-search')
const giphySubmitButton = document.querySelector('.giphy-submit')
const giphyImage = document.querySelector('.giphy-gif')

giphySubmitButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const gif = new Giphy(giphySearchBar.value)
    await gif.fetchImage()
    giphyImage.src = gif.result
    giphyImage.alt = giphySearchBar.value
})

const weatherSearchBar = document.querySelector('.weather-search')
const weatherSubmitButton = document.querySelector('.weather-submit')
const weatherInfo = document.querySelector('.weather-results')

weatherSubmitButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const weather = new Weather(weatherSearchBar.value)
    await weather.fetchWeather()
    weatherInfo.textContent = weather.description
})


