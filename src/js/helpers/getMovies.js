import axios from 'axios';

export default function getMovies() {
  axios.get(`http://www.omdbapi.com/?s=${this.state.search}`)
    .then(results => {
      console.log('results from search', results.data.Search);
      this.setState({
        movies: results.data.Search
      });
      return;
    });
}