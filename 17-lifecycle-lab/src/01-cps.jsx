import React from 'react';

export default class ClicksCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({counter: 0});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (<div>
            <button onClick={(e) => this.setState({counter: this.state.counter + 1})}>Click Fast</button>
            <div>yo clicked: {this.state.counter}</div>
            {this.state.counter < 4 && <p>faster please!</p>}
            {this.state.counter > 4 && <p>calm down..</p>}
        </div>);
    }
}