import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/chat';

class Chat extends React.Component {
  addMessage = () => {
    const text = this.refs.el.value;
    this.props.dispatch(actions.addMessage(text));
  }

  render() {
    return <div>
      <input type="text" ref="el" />
      <button onClick={this.addMessage}>Add</button>
      <ul>
        {this.props.messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    messages: state.chat.get('messages'),
  }
}

export default connect(mapStateToProps)(Chat);
