import React from 'react';
import PropTypes from 'prop-types';

export default class SquareFocus extends React.Component{

    constructor(props) {
        super(props);
        this.state = {texts : []};
    }


    setFocus = (el,index) =>{
        if(el!=null){
            el.focus()
            el.style.backgroundColor = "#ccc";
        }
    }

    fillText = (e,index) =>{
        let isFocused = (document.activeElement === e.target);
        if(isFocused){
            if(document.activeElement.innerHTML != ''){
                let updatedArr = this.state.texts;
                updatedArr[index] = {txt : String.fromCharCode(e.keyCode)};
                this.setState({texts:updatedArr});
            }else{
            this.setState({texts:[...this.state.texts , {txt : String.fromCharCode(e.keyCode)} ]});
            }
        }
    }

    componentDidUpdate(){
          let activeEl = document.activeElement;
          activeEl.style.backgroundColor = "white";
          activeEl.blur();
          let parentDiv =  this.parent
          if(activeEl.nextSibling!=null){
           this.setFocus(activeEl.nextSibling);
          }else{
            parentDiv.children[0].focus()
            parentDiv.children[0].style.backgroundColor = "#ccc";
        }
      }

    render(){
 
      return (<div ref={parent => { this.parent = parent }}>
            <SquareDiv focus={(e) =>this.setFocus(e.target)} typeKey={(e,index) => this.fillText(e,0)} text={this.state.texts[0]}/>
            <SquareDiv focus={(e) =>this.setFocus(e.target)} typeKey={(e,index) => this.fillText(e,1)} text={this.state.texts[1]}/>
            <SquareDiv focus={(e) =>this.setFocus(e.target)} typeKey={(e,index) => this.fillText(e,2)} text={this.state.texts[2]}/>
            <SquareDiv focus={(e) =>this.setFocus(e.target)} typeKey={(e,index) => this.fillText(e,3)} text={this.state.texts[3]}/>
        </div>);
    }

}

function SquareDiv(props){
    const char = {
        display: 'inline-block',
        verticalAlign: 'top',
        height: '100px',
        width: '100px',
        border: '1px solid',
        margin: '0 5px',
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '32px'
      }

    
    return <div tabIndex='1' style={char} onFocus={props.focus} onKeyDown={props.typeKey}>
                {props.text.txt}
            </div>
  }

  
  SquareDiv.propTypes = { focus: React.PropTypes.func,
                          typeKey: React.PropTypes.func,
                          text: React.PropTypes.object};
  SquareDiv.defaultProps = {text: {txt:""} };