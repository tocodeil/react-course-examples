import React from 'react';
import { connect } from 'react-redux';

class Panel extends React.Component {
  render() {
    return (
      <div className='notifications'>
        {this.props.msg && <p>{this.props.msg}</p>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    msg: state.main.get('flash'),
  }
}

export default connect(mapStateToProps)(Panel);
