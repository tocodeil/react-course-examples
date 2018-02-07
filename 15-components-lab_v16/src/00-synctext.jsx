import React from 'react';

export default class SingleInput extends React.Component{

  constructor(props){
    super(props);
    this.state= { val : 'type something...'}
  }


  onChange = (e) => {
    this.setState({
      val : e.target.value
    
    });
  }

  render() {
    var divStyle = { marginBottom: '10px' }
    return (
      <div >
        <input style={divStyle} type="text" value={this.state.val} onChange={this.onChange}/>
        <br/>
        <input style={divStyle} type="text" value={this.state.val} onChange={this.onChange}/>
        <br/>
        <input style={divStyle} type="text" value={this.state.val} onChange={this.onChange}/>
        <br/>
        <input style={divStyle} type="text" value={this.state.val} onChange={this.onChange}/>
        <br/>
        <input style={divStyle} type="text" value={this.state.val} onChange={this.onChange}/>
      </div>
    )    
  }
}

export default class MultiInput extends React.Component {
    render() {
      return (<div>
        <SingleInput />
      </div>);
    }
  }

ReactDOM.render(<MultiInput />, document.querySelector('main'));