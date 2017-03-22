import React from 'react';
import Details from './Detail';

export default class Title extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
  }

  displayDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render() {
    return (
      <div>
        <h3 onClick={this.displayDetails.bind(this)}>{this.props.movie.Title}</h3>
        {this.state.showDetails && <Details movieDetails={this.props.movie} />}
      </div>
    )
  }
}