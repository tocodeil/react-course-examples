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
            color: '#FDFFFD',
            boxes: [
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD"),
                tinycolor("#FDFFFD")
            ]
        }
    }

    changeColor = (evt) => {
        const boxes = this.state.boxes;
        for (var i = 0; i < boxes.length ; i++) {
            const selectedColor = tinycolor(evt.target.value);
            if (i == Math.ceil(boxes.length / 2) - 1) {
                boxes[i] = tinycolor(evt.target.value);
            }else if (i < boxes.length / 2) {
                boxes[i] = tinycolor(selectedColor.lighten(40 - i *4).desaturate().toString());
            } else if (i > boxes.length / 2) {
                boxes[i] = tinycolor(selectedColor.darken(i*4).desaturate().toString());
            }
        }
        this.setState({
            color: evt.target.value,
            boxes: boxes
        });
    }

    render() {
        return (
            <div>
                <h2>04 - MultiColor</h2>
                <br/>
                <input type="color" value={this.state.color} onChange={this.changeColor}/>
                <br/>
                <br/>
                <div style={{display: 'inline-block'}}>
                    {this.state.boxes.map((val, idx) => (
                        <Box color={val.toString()} ></Box>
                    ))}
                </div>
            </div>
        );
    }
}

export function Box(props) {
    return (
        <div style={{width: 50, height: 50, display: 'inline-block', backgroundColor: props.color}}></div>
    );
}

Box.propTypes = {
    color: React.PropTypes.string
};

