/**
 * Lab 03:
 *
 * Implement a color picker component.
 *
 * Component should show an <input> field to select a color, and below a <div>
 * When a color is selected, that color should be used as the background color
 * of the <div>
 *
 * Bonus: Allow external code to pass some text to be used as the contents of the
 * colored <div>
 */

import React from 'react';

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["white", "black", "blue", "red", "green"],
            pickedColor: "white",
            input: "",
        };
    }

    changeColor = (ev) => {
        console.log(this.state.input);
        console.log("picked color " +ev.target.value);
        this.setState({ pickedColor: ev.target.value });
    };

    changeInput = (ev) => {
        this.setState({ input: ev.target.value });
    };

    addInput = (ev) => {
        var colors = this.state.colors;
        colors[colors.length] = this.state.input;
        this.setState({ colors: colors});
    };

    render(props) {
        var style = {
            backgroundColor: this.state.pickedColor,
            width: 100,
            height: 100,
        };
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.changeInput}></input>
                <button onClick={this.addInput}>add color</button>
                <select onChange={this.changeColor}>

                {this.state.colors.map((val, idx) => (
                    <option key={idx} value={val}>{val}</option>
                ))}
                </select>
                <div style={style}></div>
            </div>);
    }
}