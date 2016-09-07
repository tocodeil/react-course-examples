import React from 'react';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },
  render: function() {
    return (<div className="gallery">        
        {this.props.children.map((item) => {
          return <div className="gallery-item">{item}</div>;
        })}
      </div>);
  },
});


