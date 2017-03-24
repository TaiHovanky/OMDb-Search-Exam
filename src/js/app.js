import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Search from './components/Search';
import About from './components/About';
import TitlesList from './components/TitlesList';
import NoResults from './components/NoResults';
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
        {this.state.search.length === 0 && <About />}
        {this.state.movies.length > 0 ? <TitlesList movies={this.state.movies} /> : this.state.search.length > 0 ? <NoResults search={this.state.search} /> : undefined}
      </Col>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));