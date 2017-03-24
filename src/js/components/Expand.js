import React from 'react';
import { Glyphicon } from 'react-bootstrap';
require('../../styles/titleStyles.css');

const Expand = (props) => {
  return (
    <span className='expand'>
      {props.showDetails ? <Glyphicon glyph='menu-up' /> : <Glyphicon glyph='menu-down' />}
    </span>
  );
}

export default Expand;