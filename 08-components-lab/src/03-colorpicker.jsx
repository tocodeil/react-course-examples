/**
 * Lab 03:
 *
 * Implement a color picker component.
 *
 * Component should show an <input> field to select a color, and below a <div>
 * When a color is selected, that color should be used as the background color
 * of the <div>
 *
 * Bonus: Allow external code to pass some text to be used as the contents of the
 * colored <div>
 */

/**
 * Created by ofek_am Vardi LTD. on 18/12/2016.
 */
/**
 * Created by ofek_am on 18/12/2016.
 */
import React from 'react';

export default class ColorPicker extends React.Component{

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this)
        this.onInput = this.onInput.bind(this)
    }

    state={
        color:'green',
        content:''
    }

    onChange(e){
        debugger;
        this.setState({color:e.target.value});
    }

    onInput(e){
        this.setState({content:e.target.value});
        let div=document.getElementById('div1');
        debugger;
        div.innerHTML=e.target.value;
    }

    render(){
        return <div>

            <input type="color" onChange={this.onChange}/>
            <br></br>
            <input type="text" value={this.state.val}  onInput={this.onInput}/><br></br>
            <div style={{background:this.state.color}} id="div1">
                Hi,Use the input to change this content(u can enter HTML)
            </div>
        </div>
    }
}