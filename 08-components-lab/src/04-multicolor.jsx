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


import React from 'react';
import tinycolor from 'tinycolor2';

export default class MultiColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#ff0000",
            cells: []
        }
        this.initCellColors();
    }

    initCellColors() {
        for (var i=0; i< 10; i++){
            this.state.cells[i] = this.state.color;
        }
    }

    changeColor = (evt) => {
        this.setState({color: evt.target.value});
    }

    render(){
        return <div>
            <input type="color"  value={tinycolor(this.state.color)} onChange={this.changeColor} />
            <br />
            {this.state.cells.map((val, idx) => (
                <div style={{backgroundColor : this.getColor(idx), width:"50px", height:"50px", display:"inline-block", paddingRight: "15px"}} />
            ))}

        </div>
    }

    getColor(idx) {
        if (idx > 5){
            return tinycolor(this.state.color).darken((idx-5) * 10);
        }else if (idx < 5){
            return tinycolor(this.state.color).lighten((5-idx+1) * 10);
        }else{
            return tinycolor(this.state.color);
        }
    }
}