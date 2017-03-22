import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search';

//Load bootstrap css
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

function getMovies() {
  axios.get(`http://www.omdbapi.com/?s=${this.state.search}`)
    .then(results => {
      console.log('results from search', results);
      return;
    });
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
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
        <h3>{this.state.search}</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));