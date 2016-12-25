/**
 * Implment an input component that shows 4
 * input boxes writing user input in the currently
 * focused panel
 *
 * See lab description on the webpage for a live example
 * how this should work.
 */

import React from 'react';

export default class CustomInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        };
    }

    handleKeyPress = (evt) => {
        let keyPressed = evt.nativeEvent.key;
        let index = this.state.index;
        this.refs["div" + index].innerHTML = keyPressed;
        index++;
        if (index == 6)
            index = 1;
        this.setState({
            index
        });
        this.refs["div" + index].focus();
    }

    componentDidMount() {
        const index = this.state.index;
        this.refs["div" + index].focus();
    }

    setNewIndex = (evt) => {
        const index = evt.nativeEvent.target.tabIndex;
        if (!isNaN(index) && index >= 1 && index <= 5) {
            this.setState({
                index
            })
        }
    }

    setNewTabIndex = (evt) => {
        if (evt.keyCode == 9) {
            this.setState({
                index : evt.nativeEvent.target.tabIndex
            });
        }
    }

    render() {
        const baseStyle = {
            border: "1px solid gray",
            width: "80px",
            height: "80px",
            margin: "10px",
            display: "inline-block",
            verticalAlign: "top",
            fontSize: "30px",
            lineHeight: "80px",
            textAlign: "center"
        }
        let rows = [];
        for (var idx = 1; idx <= 5; idx++) {
            rows.push(<div style={Object.assign({}, baseStyle)} tabIndex={idx} key={idx}
                           onKeyPress={this.handleKeyPress} onKeyDown={this.setNewTabIndex}
                           onClick={this.setNewIndex} ref={"div" + idx}/>)
        }
        return (<div>
            {rows}
        </div>)
    }
}



