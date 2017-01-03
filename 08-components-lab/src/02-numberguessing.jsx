class GuessingGame  extends React.Component{
  static propTypes = {
    hidden: React.PropTypes.number.isRequired,
    
  };
 constructor(props) {
    super(props);
    this.props.hidden = Math.floor(1000*Math.random());
    this.state = { guess:"" };
  }

  checkGuess(e){

    var g = parseInt(e.target.value);
    var rand = Math.random();
    if(g==this.props.hidden){
      this.setState({guess:"Right!"});
    }
    else{
      if(rand<0.3){
        this.setState({ guess:g>this.props.hidden?"Too Small":"Too Big"});
      }else{
      this.setState({ guess:g>this.props.hidden?"Too Big":"Too Small"});
      }
    }
  }
  render() {
    return <div>
      <input onChange={(e)=>this.checkGuess(e)} /><br/>
      <label>{this.state.guess}</label>

      </div>
  }
}
  


ReactDOM.render(<GuessingGame/>,
               document.querySelector('main'));
