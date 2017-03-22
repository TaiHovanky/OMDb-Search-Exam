import axios from 'axios';

export default function getDetails() {
  if(this.state.showDetails === true && !this.state.movieDetails) {
    axios.get(`http://www.omdbapi.com/?i=${this.props.movie.imdbID}`)
      .then(results => {
        console.log('results from search', results.data);
        this.setState({
          movieDetails: results.data
        });
        return;
      });
  } else {
    return;
  }
}