import React from "react";

export default class ColorPicker extends React.Component {
    static propTypes = {
        divMsg: React.PropTypes.string,
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {color: '#hexvalue'};
    }

    handleChange(e) {
        this.setState({color: e.target.value});
    }

    render() {
        var style = {
            backgroundColor: this.state.color,
        };
        return (<div style={style}>{this.props.divMsg}
            <input type="color" value={this.state.color} onChange={this.handleChange.bind(this)}/>
        </div>);
    }
}