import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search';
import TitlesList from './components/TitlesList'
import getMovies from './helpers/getMovies';
import { Col, Grid, Row } from 'react-bootstrap'

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

  render() {
    return (
      <Col md={8} mdOffset={2}>
        <Search findMovies={this.findMovies.bind(this)}/>
        <TitlesList movies={this.state.movies} />
      </Col>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));