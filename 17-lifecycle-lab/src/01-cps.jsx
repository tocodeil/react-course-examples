/**
 * Created by Test1 on 25/12/2016.
 */

import React from 'react';

export default class CounterPerSecond extends React.Component {

    constructor() {
        super();
        this.state = { message: ""  };
        setInterval(this.checkFrequency, 1000);
    }


    componentWillMount() {
        this.cnt=0;
        this.timer = setInterval(() => {
            this.setState({ ticks: this.state.ticks + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick = (event) => {
        this.setState({cnt: this.state.cnt + 1});
    }

    checkFrequency = () => {
        if (this.state.cnt > 2) {
            this.setState({message: "too fast!"});
        } else if (this.state.cnt < 2) {
            this.setState({message: "too slow...."});
        }
        this.setState({cnt: 0});
    }



    render() {
        return (<div >
            <input type="button" onClick={this.handleClick} value="click me"/>
            <label>{this.state.message}</label>
        </div>);
    }

}