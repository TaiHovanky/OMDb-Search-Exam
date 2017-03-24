import React from 'react';
import { Glyphicon } from 'react-bootstrap';
require('../../styles/titleStyles.css');

const Expand = (props) => {
  return (
    <div className='expand'>
      {props.showDetails ? <Glyphicon glyph='menu-up' /> : <Glyphicon glyph='menu-down' />}
    </div>
  );
}

export default Expand;