import React from 'react';


class GuessNumber extends React.Component {
    
   
    constructor(props) {
        super(props);
        this.state = { randomNumber : Math.round(Math.random() * 1000) , guessedNo : 0 ,message : "" };
      }


      setGuessedNo = (e) => {
        this.setState({guessedNo : e.target.value})
      }

      check = (e) =>{
        let guessedNo = this.state.guessedNo

        if(guessedNo == this.state.randomNumber){
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
            Guess Number <input type="text" onChange={this.setGuessedNo}  /> 
            <input id ="btn" type="button" onClick={this.check} value="Guess" />  <p></p>
            <p>{this.state.message}{this.state.randomNumber}  {this.state.guessedNo}</p>
          </div>);
      }
}

export default GuessNumber;