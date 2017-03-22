import React from 'react';
import { Navbar, Nav, NavItem, FormControl, FormGroup } from 'react-bootstrap';
require('../../styles/searchStyles.css');

export default class Search extends React.Component{
  search(e){
    this.props.findMovies(e.target.value);
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
            >
            </FormControl>
          </FormGroup>
        </form>
      </Navbar>
    )
  }
}