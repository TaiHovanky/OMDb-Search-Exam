import React from 'react';
import { Navbar, Nav, NavItem, FormControl, FormGroup } from 'react-bootstrap';
require('../../styles/searchStyles.css');

export default class Search extends React.Component{
  search(e) {
    this.props.findMovies(e.target.value);
  }

  handleEnter(e) {
    if(e.key === 'Enter'){
      e.preventDefault();
    } //this is to prevent page from reloading if user hits 'Enter' key
  }

  render() {
    return (
      <Navbar inverse fixedTop>
        <h1 className='mainTitle'>CINESEARCH</h1>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl 
              type='text'
              placeholder='Find a movie'
              onChange={this.search.bind(this)}
              onKeyPress={this.handleEnter.bind(this)}
            >
            </FormControl>
          </FormGroup>
        </form>
      </Navbar>
    );
  }
}