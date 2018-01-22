import React from 'react';
import $ from 'jquery';
import RateYo from 'rateYo/min/jquery.rateyo.min.js';

// 0. npm install --save <plugin> <jquery> <...>
//
// 1. import RateYo JS
// 2. import RateYo CSS files
// 3. Create a RateYo div from ReactRateYo component
//
const ReactRateYo = React.createClass({
  getInitialState() {
    return { rating: 0 };
  },

  componentDidMount() {
    $(this.refs.el).rateYo({
      rating: this.state.rating,
      onSet: (val) => this.setState({ rating: val }),
    });
  },

  /*
   * Something called setState and now rating has changed.
   * This function should update rateYo about the change
   * so the star meter shows the correct value
   */
  componentDidUpdate() {
    if ($(this.refs.el).rateYo('option', 'rating') !== this.state.rating) {
      $(this.refs.el).rateYo('option', 'rating', this.state.rating);
    }
  },

  render() {
    return (<div>
      <div ref="el"></div>
      <p>Rating: {this.state.rating}</p>
    </div>);
  }
});

export default ReactRateYo;
