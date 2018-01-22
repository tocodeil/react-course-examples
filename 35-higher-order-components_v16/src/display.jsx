import React from 'react';
import PropTypes from 'prop-types';

export default function display(DisplayComponent) {
  return class Display extends React.Component {
    static propTypes = {
      val: PropTypes.string.isRequired,
      setColor: PropTypes.func.isRequired,
    };

    constructor(props) {
      super(props);
    }

    handleChange = (e) => {
      const newColor = e.target.value;
      this.props.setColor(newColor);
    }

    render() {
      const props = Object.assign({}, this.props, { handleChange: this.handleChange });

      return (
        <DisplayComponent {...props} />
      );
    }
  }
}
