import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search'

//Load bootstrap css
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  findMovies(query) {
    console.log('find Movie query', query);
    this.setState({
      search: query
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Movie Madness!!!</h1>
        <Search findMovies={this.findMovies.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));