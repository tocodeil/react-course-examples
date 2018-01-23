import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';

export default class Randomizer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = { selectedItem: 0 };
  }

  randomize = () => {
    const count = React.Children.count(this.props.children);
    this.setState(oldState => ({ selectedItem: _.random(count-1)}));
  }

  render() {
    const items = React.Children.toArray(this.props.children);
    return (
      <div>The List:
        {items[this.state.selectedItem]}
        <button onClick={this.randomize}>Randomize</button>
      </div>
    );
  }
}
