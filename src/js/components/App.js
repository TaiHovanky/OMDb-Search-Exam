import React from 'react';
import Search from './Search';
import About from './About';
import TitlesList from './TitlesList';
import NoResults from './NoResults';
import getMovies from '../helpers/getMovies';
import { Col } from 'react-bootstrap';

export default class App extends React.Component{
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
        {this.state.movies.length > 0 ? <TitlesList movies={this.state.movies} /> : 
         this.state.search.length > 0 ? <NoResults search={this.state.search} /> : undefined}
      </Col>
    )
  }
}