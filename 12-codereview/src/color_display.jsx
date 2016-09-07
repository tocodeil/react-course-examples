import React from 'react';

function ColorDisplay(props) {
  return (<input 
    type="color" 
    value={props.val} 
  />);
}

export default ColorDisplay;
