/**
 * Lab 02: CPS monitor with indicator
 *
 * Add an indicator panel to the CPS monitor
 * that shows a green rectangle if user clicks fast enough
 * or a red rectangle if user clicks too slow
 *
 * Decide how to share information between the components
 * and what values to pass when creating the Indicator
 */

import React from 'react';

export default class Indicator  extends React.Component{

    constructor(props) {
        super(props);
    }

   /* renderColor = (color) => {
        const baseStyle = {
            width: '50px',
            height: '50px',
            display: 'inline-block',
        };
        return
            <div
                style={Object.assign({}, baseStyle, {backgroundColor: this.props.color} )} >
            </div>;
    }*/

    render() {
        const baseStyle = {
            width: '50px',
            height: '50px',
            display: 'inline-block',
        };

        return <div
            style={Object.assign({}, baseStyle, {backgroundColor: this.props.color} )}
        >
        </div>;
    }
};