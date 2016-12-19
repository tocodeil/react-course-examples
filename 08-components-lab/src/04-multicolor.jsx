import React from "react";
import tinycolor2 from "tinycolor2";

export default class MultiColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {colors: []};
    }

    handleChange(e) {
        var colors = [];
        var selectedColor = e.target.value;
        colors[5] = selectedColor;
        // bright
        for (var i = 4; i >= 0; i--) {
            colors[i] = tinycolor2(selectedColor).brighten((5 - i) * 10).toHexString();
        }
        // darker
        for (var i = 6; i <= 10; i++) {
            colors[i] = tinycolor2(selectedColor).darken((i - 5) * 5).toHexString();
        }

        this.setState({colors});
    }

    render() {
        const style = {
            width: "50px",
            height: "50px",
            border: "50px",
            display: "inline-block",
            backgroundColor: "none",
        };

        return (<div>
            <input type="color" value={this.state.color} onChange={(e) => this.handleChange(e)}/>
            <br/>
            {this.state.colors.map(function (color, key) {
                return <div key={key} style={Object.assign({}, style, {backgroundColor: color})}/>;
            })}
        </div>);
    }
}