import React from 'react';
require('../../styles/movieStyles.css');

const NoResults = (props) => {
  //displays if no results found for search query
  return (
    <div className='well none'>
      <h3>No search results can be found for '{props.search}'.</h3>
    </div>
  );
}

export default NoResults;