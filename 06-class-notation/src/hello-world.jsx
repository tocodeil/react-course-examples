import React from 'react';

export default class HelloWorld extends React.createComponent {
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

  toggle() {
    this.setState({ hide: !this.state.hide });
  }

  render() {
    return <p>
      Hello: {this.state.hide ? "XXX" : this.props.name} 
      <button onClick={(e) => this.toggle(e)}>
        Click To Toggle</button>
    </p>
  }
}


