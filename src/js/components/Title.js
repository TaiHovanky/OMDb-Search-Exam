import React from 'react';
import Details from './Detail';
import getDetails from '../helpers/getDetails';
require('../../styles/titleStyles.css');

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
        {!this.state.showDetails && <img src={this.props.movie.Poster} className='filmThumb' />}
        <h3 className={!this.state.showDetails ? 'filmTitle' : undefined}>
          {this.props.movie.Title}
        </h3>
        <p className={!this.state.showDetails ? 'filmYear': undefined}>
          {this.props.movie.Year}
        </p>
        {this.state.showDetails && <Details movieDetails={this.state.movieDetails} />}
      </div>
    )
  }
}