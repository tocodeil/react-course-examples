import React from 'react';

export default class Gallery extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
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


