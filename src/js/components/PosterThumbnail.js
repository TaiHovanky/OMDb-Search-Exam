import React from 'react';
require('../../styles/titleStyles.css');

const PosterThumbnail = (props) => {
  return (
    <span>
      {!props.showDetails &&
        props.poster !== 'N/A' &&
      <img 
        src={props.poster} 
        className='filmThumb' 
      />}
    </span>
  );
}

export default PosterThumbnail;