import React from 'react';

export default class GuessNumber extends React.Component {

    randomNum;

    constructor() {
        super();
        this.randomNum=Math.floor((Math.random() * 1000));
        this.state = {message: " "};
    }

    handleChange = (event) => {
        if (event.target.value>this.randomNum){
            this.setState({message: 'too large'});
        }else if (event.target.value<this.randomNum){
            this.setState({message: 'too small'});
        }else{
            this.setState({message: 'correct!'});
        }


    }

    render() {
        const message = this.state.message;
        return (<div >
            <input type="number" onBlur={this.handleChange} />
            <br/>
            <label>{message}</label>
        </div>);
    }

}