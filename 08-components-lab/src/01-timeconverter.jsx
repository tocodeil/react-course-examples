
class TimeBoxes  extends React.Component{
  static propTypes = {
    val: React.PropTypes.string.isRequired,
    
  };
  

  constructor(props) {
    super(props);
    this.state = { hour: '0',minute: '0',second: '0' };
  }

  changeHour(e) {
    
    this.setState({ hour: e.target.value });
    
  }
  changeMinute(minutes){

    this.setState({hour: minutes/60});
    this.setState({ minute: minutes%60 });
  }
  changeSecond(seconds){
    this.changeMinute(seconds/60)
    this.setState({ second: seconds%60 });
  }
 changeMinuteHandler(e) {
    var minute =parseInt(e.target.value);

    this.changeMinute(minute);
    
  }
changeSecondHandler(e) {
    var second =parseInt(e.target.value);
    this.changeSecond(second);

    
  }
  render() {
    return <div>
      <input onChange={(e)=>this.changeHour(e)}  value={this.state.hour}/>
      <input onChange={(e)=>this.changeMinuteHandler(e)} value={this.state.minute}/>
      <input onChange={(e)=>this.changeSecondHandler(e)} value={this.state.second}/>

      </div>

  }
}




ReactDOM.render(React.createElement(TimeBoxes ),
               document.querySelector('main'));
