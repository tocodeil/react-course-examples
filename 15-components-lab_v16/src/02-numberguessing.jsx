import React from 'react';


class GuessNumber extends React.Component {
    
   
    constructor(props) {
        super(props);
        this.state = { randomNumber : Math.round(Math.random() * 1000) , message : "" };
      }


      check = (e) =>{
        let guessedNo = parseInt(document.getElementById("guessedNo").value)

        if(guessedNo === this.state.randomNumber){
            this.setState({ message: "Bingo!" });
        }

        if(guessedNo > this.state.randomNumber){
            this.setState({ message: "Too Big" });
        }

        if(guessedNo < this.state.randomNumber){
            this.setState({ message: "Too Small" });
        }

      }


      render() {
        return (<div>
            Guess Number <input type="text" id="guessedNo"  /> 
            <input id ="btn" type="button" onClick={this.check} value="Guess" />  <p></p>
            <p>{this.state.message}</p>
          </div>);
      }
}

export default GuessNumber;