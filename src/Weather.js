class Weather {
    constructor(searchTerm) {
      this.searchTerm = searchTerm
      this.description = null;
    }
  
    async fetchWeather() {
      try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.searchTerm}?key=LLEHL2QF6VDENHD46GBVK269H`, {mode: 'cors'})
        const result = await response.json();
        this.description = result.description
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export { Weather }
  