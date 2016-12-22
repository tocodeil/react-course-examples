import React from 'react';

export default class ColorSelector extends React.Component {

    constructor(props) {
        super();
        this.state = {color: "#fE6"};
    }

    handleChange = (event) => {
        this.setState({color: event.target.value});
    }

    render() {
        return (<div >
            <input type="color" onChange={this.handleChange} />
            <div style={{backgroundColor:this.state.color}}>{this.props.message}</div>
        </div>);
    }

    propTypes= {
        message: React.PropTypes.string,
    }

    defaultProps= {
        message: 'Hi',
    }

}

