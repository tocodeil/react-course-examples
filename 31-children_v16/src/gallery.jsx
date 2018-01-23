import React from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div className="gallery">        
        {this.props.children.map((item) => {
          return <div className="gallery-item">{item}</div>;
        })}
      </div>
    );
  }
}


