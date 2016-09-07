import React from 'react';
import * as actions from 'actions/chat';
import { connect } from 'react-redux';

const Chat = React.createClass({
  addMessage() {
    const text = this.refs.el.value;
    this.props.dispatch(actions.addMessage(text));
  },

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
});

function mapStateToProps(state) {
  return {
    messages: state.chat.get('messages'),
  }
}

export default connect(mapStateToProps)(Chat);
