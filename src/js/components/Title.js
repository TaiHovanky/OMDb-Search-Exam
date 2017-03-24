import React from 'react';
import Loader from './Loader';
import Details from './Detail';
import Expand from './Expand';
import getDetails from '../helpers/getDetails';
require('../../styles/titleStyles.css');

export default class Title extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      movieDetails: null,
      loading: false
    }
  }

  displayDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    }, getDetails);
  }

  render() {
    return (
      <div className='well'>
        {!this.state.showDetails &&
         this.props.movie.Poster !== 'N/A' &&
         <img src={this.props.movie.Poster} className='filmThumb' />}
        <h3 
          className={!this.state.showDetails ? 'filmTitle' : 'titleDetail'}
          onClick={this.displayDetails.bind(this)}
        >
          <Expand showDetails={this.state.showDetails} />
          {this.props.movie.Title}
        </h3>
        <p className={!this.state.showDetails ? 'filmTitle': 'filmDetail'}>
          {this.props.movie.Year}
        </p>
        {this.state.loading && <Loader />}
        {this.state.showDetails && <Details movieDetails={this.state.movieDetails} />}
      </div>
    )
  }
}