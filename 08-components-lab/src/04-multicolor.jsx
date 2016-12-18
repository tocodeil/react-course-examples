/**
 * Lab 04:
 *
 * Implement a multi color picker component.
 *
 * Component should provide an <input> field to select a color,
 * and below 9 <div> elements.
 * Each <div> should have a slightly darker color than the previous one,
 * with the color selected by the user used as the middle color.
 *
 * See lab description on the website for a live demo.
 *
 * Hint: Use tinycolor library to perform color manipulations
 *
 */

/**
 * Created by ofek_am Vardi LTD. on 18/12/2016.
 */
/**
 * Created by ofek_am on 18/12/2016.
 */
import React from 'react';

export default class MultiColor extends React.Component{

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    state={
        color:'green',
        content:''
    }

    onChange(e){
        debugger;
        this.setState({color:e.target.value});
    }

    render(){
        return <div>

            <input type="color" onChange={this.onChange}/>
            <br></br>
            <div style={{background:this.state.color,filter:'brightness(140%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(130%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(120%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(110%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(100%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(90%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(80%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(70%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,filter:'brightness(60%)',height:50,width:50,display:'inline-block'}}/>
            <div style={{background:this.state.color,}}/>
        </div>
    }
}
