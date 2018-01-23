import React from 'react';

function TextDisplay(props) {
  return <input type="text" value={props.val} readOnly={true} />
}

export default TextDisplay;
