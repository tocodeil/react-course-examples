import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
<script type='text/javascript' src='tinycolor.js'></script>

class MultiColor extends React.Component{

    constructor(props) {
        super(props);
        this.state = {colorSteps : {col1 : "", col2 :"" , col3:"" , col3:"" , col4:"" , col5: "" , col5:"" , col6:"" , col7:"",col8:"" , col9:""} };
    }


    changeColor = (color) =>{
        let tinycolor = require("tinycolor2");
        let colors = tinycolor(color.hex);
      
       this.setState( { colorSteps : {col1 : colors.toHexString(),
            col2 : colors.darken(1).toHexString(),
            col3 : colors.darken(2).toHexString(),
            col4 : colors.darken(3).toHexString(),
            col5 : colors.darken(4).toHexString(),
            col6 : colors.darken(5).toHexString(),
            col7 : colors.darken(6).toHexString(),
            col8 : colors.darken(7).toHexString(),
            col9 : colors.darken(8).toHexString()} 
        });
        
        
    }

    render(){
      return (<div>
            <SketchPicker
             color={ this.state.background }
             onChangeComplete={this.changeColor}/>
             
            <p></p>
            <div>
            <ColorDiv color={this.state.colorSteps.col1} />
            <ColorDiv color={this.state.colorSteps.col2} />
            <ColorDiv color={this.state.colorSteps.col3} />
            <ColorDiv color={this.state.colorSteps.col4} />
            <ColorDiv color={this.state.colorSteps.col5} />
            <ColorDiv color={this.state.colorSteps.col6} />
            <ColorDiv color={this.state.colorSteps.col7} />
            <ColorDiv color={this.state.colorSteps.col8} />
            <ColorDiv color={this.state.colorSteps.col9} />
            </div>
        </div>);
    }

}



function ColorDiv(props) {
    return (
    <div style={{backgroundColor: props.color ,width: '60px', height: '50px',float: 'left'}}></div>
    );
  }

  ColorDiv.propTypes = { color: React.PropTypes.string};
  ColorDiv.defaultProps = { color: "" };

export default MultiColor;