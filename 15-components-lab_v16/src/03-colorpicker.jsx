import React from 'react';
import PropTypes from 'prop-types';

class ColorPicker extends React.Component{

    constructor(props) {
        super(props);
        this.state = {newColor : "#D3D3D3"};
    }


    changeColor = (e) =>{
        let newColorVal = e.target.value;
        this.setState({newColor: newColorVal});
    }

    render(){
      return (<div>
            Change Color <input type="text" onChange={this.changeColor} /> example : yellow or #FFFF00
            <p></p>
            <ColorDiv color={this.state.newColor}/>
        </div>);
    }

}

function ColorDiv(props) {
    return <div style={{backgroundColor: props.color,width: '250px', height: '150px'}}>
    </div>
  }

  ColorDiv.propTypes = { color: React.PropTypes.string };
  ColorDiv.defaultProps = { color: "#D3D3D3" };

export default ColorPicker;