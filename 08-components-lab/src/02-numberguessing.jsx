import React from 'react';
import _ from 'underscore';

export default class NumberGuessing extends React.Component {
    randomNum = _.random(1, 1000);
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            output: "",
        };
    }

    myXOR(a,b) {
        return ( a || b ) && !( a && b );
    }

    handleChange(e) {
        const value = e.target.value;
        const lieRandom = _.random(1,100);
        const lieNow = lieRandom < 10;
        let output;

        if (this.myXOR(value > this.randomNum, lieNow)) {
            output = "too big"
        }
        else if (this.myXOR(value < this.randomNum, lieNow)) {
            output = "too small"
        }
        else {
            output = "Great!"
        }

        this.setState({value, output});
    }

    render() {
        return (
            <div>

                <input
                value={Number(this.state.value)}
                onChange={this.handleChange.bind(this)}/>

                <br />
                {this.randomNum} <br />
                output: {this.state.output}

            </div>
        )
    }
}