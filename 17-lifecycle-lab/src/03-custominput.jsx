/**
 * Implment an input component that shows 4
 * input boxes writing user input in the currently
 * focused panel
 *
 * See lab description on the webpage for a live example
 * how this should work.
 */
import React from 'react';

export default class CustomInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            inputArray: [0,1,2,3],
        };
    }

    componentDidMount = () => {
        this.refs.in0.focus();
    };

    changeFocus = (key, eve) => {
        eve.target.value = eve.target.value.slice(-1);
        if (this.state.inputArray[key+1] === undefined) {
            key = -1;
        }
        key = key +1;
        this.refs["in"+key].focus();
    }

    render() {
        var style = {
            height: 50,
            width: 50,
            fontSize: 30,
            fontWeight: "bold",
        }
        return (
            <div>
                {this.state.inputArray.map((val, idx) => (
                    <input ref={"in"+val} type="text" style={style} key={val} onChange={this.changeFocus.bind(this, val)}></input>
                ))}

            </div>);
    }
};

