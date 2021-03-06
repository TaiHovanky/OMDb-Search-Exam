import axios from 'axios';

export default function getMovies() {
  axios.get(`http://www.omdbapi.com/?s=${this.state.search}&type=movie`)
    .then(results => {
      console.log('movies', results);
      this.setState({
        movies: results.data.Search || []
      });
    });
}