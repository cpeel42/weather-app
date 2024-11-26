class Weather {
    constructor(searchTerm) {
      this.searchTerm = searchTerm
      this.result = null
    }

    async fetchWeather() {
      try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.searchTerm}?key=LLEHL2QF6VDENHD46GBVK269H`, {mode: 'cors'})
        this.result = await response.json();
        return this.result
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    }
  }
  
  export { Weather }
  