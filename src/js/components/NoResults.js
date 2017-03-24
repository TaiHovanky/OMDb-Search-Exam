import React from 'react';
require('../../styles/titleStyles.css');

const NoResults = (props) => {
  return (
    <div className='well none'>
      <h3>No search results can be found for '{props.search}'.</h3>
    </div>
  );
}

export default NoResults;