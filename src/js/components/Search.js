import React from 'react';
import { InputGroup, Button, FormControl, HelpBlock, FormGroup, ControlLabel, Grid, Row, Col, Media } from 'react-bootstrap';

export default class Search extends React.Component{
  search(e){
    this.props.findMovies(e.target.value);
  }

  render() {
    return (
      <Col md={8} mdOffset={2}>
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
      </Col>
    )
  }
}