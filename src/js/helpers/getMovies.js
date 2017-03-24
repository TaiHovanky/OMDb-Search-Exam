import axios from 'axios';

export default function getMovies() {
  axios.get(`http://www.omdbapi.com/?s=${this.state.search}`)
    .then(results => {
      this.setState({
        movies: results.data.Search || []
      });
      return;
    });
}