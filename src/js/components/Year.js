import React from 'react';
require('../../styles/titleStyles.css');

const Year = (props) => {
  console.log('year is rendering')
  return (
    <p className={props.showDetails ? 'titleDetail' : props.poster !== 'N/A' ? 'filmTitle' : 'titleDetail'}>
      {props.year}
    </p>
  );
}

export default Year;