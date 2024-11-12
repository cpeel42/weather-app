class Giphy {
  constructor(searchTerm) {
    this.searchTerm = searchTerm
    this.result = null;
  }

  async fetchImage() {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=8RSb3MhMR52q2DgaCH43NSfANtmFEk6x&s=${this.searchTerm}`, {mode: 'cors'})
      const result = await response.json();
      this.result = result.data.images.original.url
    } catch (error) {
      console.log(error);
    }
  }
}

export { Giphy }
