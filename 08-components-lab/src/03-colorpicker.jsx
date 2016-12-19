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
            txtColor: "white"
        }
    }

    changeColor = (evt) => {
        this.setState({txtColor: evt.target.value});

    }
    render(){

        return <div>
            <input type="text" placeholder="pick a color" value={this.state.txtColor} name="pickAColor" onChange={this.changeColor} />
            <br />
            <div style={{backgroundColor : this.state.txtColor, width:"100px", height:"100px"}} />
        </div>
    }
}
