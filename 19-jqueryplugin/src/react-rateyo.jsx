import React from 'react';
import $ from 'jquery';
import RateYo from 'rateyo/min/jquery.rateyo.min.js';

// 0. npm install --save <plugin> <jquery> <...>
//
// 1. import RateYo JS
// 2. import RateYo CSS files
// 3. Create a RateYo div from ReactRateYo component
//
export default class ReactRateYo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 };
  }

  componentDidMount() {
    $(this.el).rateYo({
      rating: this.state.rating,
      onSet: (val) => this.setState(oldState => ({ rating: val })),
    });
  }

  /*
   * Something called setState and now rating has changed.
   * This function should update rateYo about the change
   * so the star meter shows the correct value
   */
  componentDidUpdate() {
    if ($(this.el).rateYo('option', 'rating') !== this.state.rating) {
      $(this.el).rateYo('option', 'rating', this.rating);
    }
  }

  render() {
    return (
      <div>
        <div ref={(el) => {this.el = el; }}></div>
        <p>Rating: {this.state.rating}</p>
      </div>
    );
  }
}
