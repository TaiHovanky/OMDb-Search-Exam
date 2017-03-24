import React from 'react';
require('../../styles/titleStyles.css');

const About = () => {
  //displays when the user hasn't typed anything into the search bar
  return (
    <div className='well none'>
      <h3>Find your favorite movies...</h3>
      <p>Cinesearch lets you find the movies that humored you, scared you, or moved you. To find a movie,
        just type its title into the search bar and click on one of the search results' titles to see more details.
      </p>
    </div>
  )
}

export default About;