import React from 'react';

export default class ClicksCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            fastPlayer: false,
        };

        this.incClickCounter = this.incClickCounter.bind(this);
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({counter: 0});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    incClickCounter() {
        let counter = this.state.counter + 1;
        let fastPlayer = false;
        if (counter > 4) {
            fastPlayer = true;
        }

        this.setState({
            counter,
            fastPlayer,
        });
    }

    render() {
        return (<div>
            <button onClick={this.incClickCounter}>Click Fast</button>
            <div>yo clicked: {this.state.counter}</div>
            <ColorIndicator fastPlayer={this.state.fastPlayer}/>
        </div>);
    }
}
function ColorIndicator(props) {
    const style = {
        width: "100px",
        height: "50px",
        backgroundColor: "none",
    };
    return (<div>
        {(props.fastPlayer && <div style={{...style, backgroundColor: "green"}}>"calm down.."</div>) ||
        (!props.fastPlayer && <div style={{...style, backgroundColor: "red"}}>"faster!"</div>)}
    </div>);
}

ColorIndicator.PropTypes = {
    fastPlayer: React.PropTypes.bool.isRequired,
};