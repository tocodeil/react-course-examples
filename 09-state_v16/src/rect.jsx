import React from 'react';
import PropTypes from 'prop-types';

export default class Rect extends React.Component {
  static propTypes = {
    val: PropTypes.number.isRequired,
    checkDivision: PropTypes.number.isRequired,
  }
  
  render() {
    var d = (this.props.val % this.props.checkDivision === 0);
    
    var style = {
      width: '40px',
      height: '40px',
      textAlign: 'center',
      lineHeight: '40px',
      display: 'inline-block',
      overflow: 'hidden',
      background: d ? 'lightgreen' : 'white',
    };
    
    return <div style={style}>{this.props.val}</div>
  }
}
