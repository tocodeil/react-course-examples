/**
 * Lab 04:
 *
 * Implement a multi color picker component.
 *
 * Component should provide an <input> field to select a color,
 * and below 9 <div> elements.
 * Each <div> should have a slightly darker color than the previous one,
 * with the color selected by the user used as the middle color.
 *
 * See lab description on the website for a live demo.
 *
 * Hint: Use tinycolor library to perform color manipulations
 *
 */

import tinycolor from 'tinycolor2';
import React from 'react';

export default class MultiColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedColor: null,
            baseColors: ["yellow","green", "blue", "red"],
            colors: [],
        };
    }

    createColorArray = (ev) => {
        this.state.pickedColor = tinycolor(ev.target.value);
        var colors = []
        this.state.pickedColor = tinycolor(this.state.pickedColor).darken(i * 50).toString();
        for (var i = 0; i < 9 ; i++) {
            console.log(tinycolor(this.state.pickedColor).brighten(i * 11).toString());
            colors[i] = tinycolor(this.state.pickedColor).brighten(i * 11).toString();
        }
        this.setState({ colors: colors });
    };

    getStyle = (ev) => {
        return {
            backgroundColor: tinycolor(this.state.colors[ev]).toString(),
            width: 50,
            height: 20,
        };
    }
    render(props) {
        var style = {
            backgroundColor: this.state.pickedColor,
            width: 50,
            height: 20,
        };
        return (
            <div>
                <select onChange={this.createColorArray}>
                    {this.state.baseColors.map((val, idx) => (
                        <option key={idx} value={val}>{val}</option>
                    ))}
                </select>
                {this.state.colors.map((val, idx) => (
                    <div key={idx} style={this.getStyle(idx)}></div>
                ))}
            </div>);
    }
}