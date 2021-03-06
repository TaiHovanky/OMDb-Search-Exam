import React from 'react';
import Loader from './Loader';
import Details from './Detail';
import Title from './Title';
import PosterThumbnail from './PosterThumbnail';
import Year from './Year';
import getDetails from '../../helpers/getDetails';
require('../../../styles/movieStyles.css');

export default class Movie extends React.Component{
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
         <PosterThumbnail 
          showDetails={this.state.showDetails}
          poster={this.props.movie.Poster} 
        />
        <Title 
          title={this.props.movie.Title}
          poster={this.props.movie.Poster}
          showDetails={this.state.showDetails}
          displayDetails={this.displayDetails.bind(this)}
        />
        <Year
          poster={this.props.movie.Poster}
          showDetails={this.state.showDetails}
          year={this.props.movie.Year}
        />
        {this.state.loading && <Loader />}
        {this.state.showDetails && <Details movieDetails={this.state.movieDetails} />}
      </div>
    )
  }
}