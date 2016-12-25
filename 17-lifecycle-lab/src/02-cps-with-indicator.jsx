/**
 * Created by Test1 on 25/12/2016.
 */

/**
 * Created by Test1 on 25/12/2016.
 */

import React from 'react';

export default class CpsWithIndicator extends React.Component {

    constructor() {
        super();
        this.state = {
            message: ""
            , cnt: 0
        };
        setInterval(this.checkFrequency, 1000);
    }


    componentWillMount() {
        this.setState({cnt : 0});
        this.timer = setInterval(() => {
            this.setState({ticks: this.state.ticks + 1});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleClick = (event) => {
        this.setState({cnt : this.state.cnt += 1});
    }

    checkFrequency = () => {
        if (this.state.cnt > 2) {
            this.setState({message: "too fast!"});
        } else if (this.state.cnt < 2) {
            this.setState({message: "too slow...."});
        }
        this.setState({cnt : 0});
    }


    render() {
        return (<div >
            <input type="button" onClick={this.handleClick} value="click me"/>
            <label>{this.state.message}</label>
            <br/>
            <ColorIndicator cnt={this.state.cnt}/>
        </div>);
    }

}


function ColorIndicator(props) {
    //debugger;
    if (props.cnt > 2) {
        return <label style={{backgroundColor: "green"}}>{props.cnt}</label>
    } else {
        return <label style={{backgroundColor: "red"}}>{props.cnt}</label>
    }

}

ColorIndicator.propTypes = {cnt: React.PropTypes.number};
ColorIndicator.defaultProps = {cnt: 0};
