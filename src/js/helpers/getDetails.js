import axios from 'axios';

export default function getDetails() {
  var imdbID = this.props.movie.imdbID;
  if(this.state.showDetails === true && !this.state.movieDetails) {
    this.setState({
      loading: true
    });
    var movie = localStorage.getItem(imdbID);
    if(movie) {
      this.setState({
        movieDetails: JSON.parse(movie),
        loading: false
      });
    } else {
      axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
        .then(results => {
          console.log('results', results)
          this.setState({
            movieDetails: results.data,
            loading: false
          });
          try {
            localStorage.setItem(imdbID, JSON.stringify(results.data));
          } catch(error) {
            console.error('could not save to local storage', error);
          }
          return;
        });
    }
  } else {
    return;
  }
}