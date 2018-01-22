import React from 'react';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  static defaultProps = {
    name: "Guest"
  };

  constructor(props) {
    super(props);
    this.state = { hide: true };
  }

  toggle = (e) => {
    this.setState((oldState) => ({ hide: !oldState.hide }));
  }

  render() {
    return <p>
      Hello: {this.state.hide ? "XXX" : this.props.name} 
      <button onClick={this.toggle}>
        Click To Toggle</button>
    </p>
  }
}


