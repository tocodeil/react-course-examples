import React from 'react';

export default class TimeConverter extends React.Component {

    constructor(props) {
        super(props);
        // one can also calc all time parts by minimum value, as seconds in that case.
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
        };

        this.valueChanged = this.valueChanged.bind(this);
    }

    valueChanged(e) {
        let hour, minute, second;
        const {name, value} = e.target;

        switch (name) {
            case "hour":
                hour = value;
                minute = value * 60;
                second = value * 3600;
                break;
            case "minute":
                minute = value;
                hour = value / 60;
                second = value * 60;
                break;
            case "second":
                second = value;
                hour = value / 3600;
                minute = value / 60;
                break;

        }
        this.setState({hour, minute, second});
    }

    render() {
        return (<div>
            <Time time={Number(this.state.hour)} name="hour" valueChanged={this.valueChanged}/>
            <Time time={Number(this.state.minute)} name="minute" valueChanged={this.valueChanged}/>
            <Time time={Number(this.state.second)} name="second" valueChanged={this.valueChanged}/>
        </div>)
    }
}

function Time(props) {
    return (<div>{props.name}:
        <input type="number" name={props.name} value={props.time} onChange={(e) => props.valueChanged(e)}/>
    </div>);
}

Time.propTypes = {
    time: React.PropTypes.number,
    name: React.PropTypes.string,
};
Time.defaultProps = {
    time: 0,
};
