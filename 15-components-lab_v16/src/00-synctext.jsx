import React from 'react';
import PropTypes from 'prop-types';

class SingleInput extends React.Component{
  static propTypes = {
    val: PropTypes.string
  }

  static defaultProps = {
    val: 'type something...'
  }

  render() {
    var divStyle = { paddingBottom: '5px' }
    return (
      <div style={divStyle}>
        <input type="text" value={this.props.val}/>
      </div>
    )    
  }
}

class MultiInput extends React.Component {
    render() {
      return (<div>
        <SingleInput />
        <SingleInput />
        <SingleInput />
        <SingleInput />
        <SingleInput />
      </div>);
    }
  }

  ReactDOM.render(<MultiInput />, document.querySelector('main'));