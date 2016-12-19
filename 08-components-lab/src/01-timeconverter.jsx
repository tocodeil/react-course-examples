import React from 'react';
import InputText from '../input_text';

/**
 * inputText1 time=1 value=5 3600 1
 * inputText2 time=60 value=5 60
 * inputText3 time=3600 1
 */

export default class TimeConverter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sec: 0,
            min: 0,
            hour: 0,
        };

    }

    handleChange(e) {
        //TODO: change switch case to power methods
        const {name, value} = e.target;
        let sec,min,hour;

        switch (name) {
            case "sec":
                sec = value;
                min = value/60;
                hour = value/60/60;
                break;

            case "min":
                sec = value*60;
                min = value;
                hour = value/60;
                break;

            case "hour":
                sec = value*60*60;
                min = value*60;
                hour = value;
                break;
        }

        this.setState({
            sec: sec,
            min: min,
            hour: hour
        });

    }


    render() {
        return (<div>
            <InputText1
                name="sec"
                value={Number(this.state.sec)}
                onChangeText={this.handleChange.bind(this)}/>

            <InputText1
                name="min"
                value={Number(this.state.min)}
                onChangeText={this.handleChange.bind(this)}/>

            <InputText1
                name="hour"
                value={Number(this.state.hour)}
                onChangeText={this.handleChange.bind(this)}/>
        </div>);
    }
}


/**
 * InputText1
 * @param props
 * @returns {XML}
 * @constructor
 */
function InputText1(props) {
    return (
        <div>
            <input name={props.name} value={props.value} onChange={props.onChangeText}/>
        </div>
    );

}

InputText1.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    onChangeText: React.PropTypes.func
};


