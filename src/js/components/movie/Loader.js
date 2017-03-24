import React from 'react';
require('../../../styles/movieStyles.css');

const Loader = () => {
  return (
    <div className='loader'>
      <img src='../../assets/loading.gif' />
    </div>
  );
}

export default Loader;