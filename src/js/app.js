import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search';
import TitlesList from './components/TitlesList'
import getMovies from './helpers/getMovies';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      movies: []
    }
  }

  findMovies(query) {
    this.setState({
      search: query
    }, getMovies);
  }

  componentDidMount() {
    this.findMovies(this.state.search);
  }

  render() {
    return (
      <div>
        <h1>Hello Movie Madness!!!</h1>
        <Search findMovies={this.findMovies.bind(this)}/>
        <div>
          <TitlesList movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));