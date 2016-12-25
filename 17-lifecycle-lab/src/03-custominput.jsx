import React from 'react';

export default class CustomInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.elementsNumber = 4;
    }

    onKeyPressEvent = (e) => {
        // get next element to be focused. return to the first item when it's reach the end.
        let rec = document.getElementById(((Number(e.target.id) + 1) % this.elementsNumber));
        rec.focus();
    };

    render() {
        return (<div>
            {[...Array(this.elementsNumber)].map((element, key) => (
                <FocusedElement key={key} keyValue={key} onKeyPressEvent={this.onKeyPressEvent}/>
            ))}
        </div>);
    }
}

class FocusedElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    static PropTypes = {
        keyValue: React.PropTypes.number.isRequired,
        onKeyPressEvent: React.PropTypes.func.isRequired,
    };

    onKeyPressEvent = (e) => {
        // get pressed key
        this.setState({text: e.key});
        // update parent to move focus
        this.props.onKeyPressEvent(e);
    };

    render() {
        const style = {
            width: "70px",
            height: "50px",
            display: "inline-block",
            marginLeft: "5px",
            backgroundColor: "lightgray",
        };

        return (<div tabIndex={this.props.keyValue} style={style} id={this.props.keyValue}
                     onKeyPress={this.onKeyPressEvent}>{this.state.text}</div>);
    }
}
