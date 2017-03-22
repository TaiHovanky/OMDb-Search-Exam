import React from 'react';
import Details from './Detail';
import getDetails from '../helpers/getDetails'

export default class Title extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      movieDetails: null
    }
  }

  displayDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    }, getDetails);
  }

  render() {
    return (
      <div 
        className='well' 
        onClick={this.displayDetails.bind(this)}
      >
        <h3>{this.props.movie.Title}</h3>
        {this.state.showDetails && <Details movieDetails={this.state.movieDetails} />}
      </div>
    )
  }
}