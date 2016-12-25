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
            color: '#3599db',
            text: ""
        }
    }

    changeColor = (evt) => {
        this.setState({
            color: evt.target.value
        });
    }

    onTextChange = (evt) => {
        this.setState({
            text: evt.target.value
        });
    }

    render() {
        return (

            <div>
                <h2>03 - Color Picker</h2>
                <br/>
                <br/>
                <input type="color" value={this.state.color} onChange={this.changeColor}/>
                <br/>
                <div style={{width: 100, height: 100, background: this.state.color}}>
                    <p>{this.state.text}</p>
                </div>
                <br/>
                <input type="string" value={this.state.text} onChange={this.onTextChange}/>
            </div>
        );
    }
}



