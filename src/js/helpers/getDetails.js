import axios from 'axios';

export default function getDetails() {
  var imdbID = this.props.movie.imdbID;
  if(this.state.showDetails === true && !this.state.movieDetails) {
    //if the movie was retrieved during this session, it should be in this.state for that component.
    //The goal is to avoid making unnecessary GET requests if the user has retrieved movie details for that movie before.
    this.setState({
      loading: true
    }); //if this.state.loading is true, the loader GIF displays
    //once it's set to false, the loader GIF will no longer display
    var movie = localStorage.getItem(imdbID); //first check if the movie has been retrieved before
    //and is in localStorage. If it is in localStorage, update state.
    if(movie) {
      this.setState({
        movieDetails: JSON.parse(movie),
        loading: false
      });
    } else { 
      //if movie hasn't been retrieved before, make axios.get call to pull movie from OMDB API
      axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
        .then(results => {
          this.setState({
            movieDetails: results.data,
            loading: false
          });
          try {
            localStorage.setItem(imdbID, JSON.stringify(results.data));
            //try to put the retrieved movie into localStorage
          } catch(error) {
            console.error('could not save to local storage', error);
            //since there's a limit to localStorage's capacity, this catch is used for any errors
          }
          return;
        });
    }
  } else {
    return;
  }
}