import React from 'react';

export default class TimeConverter extends React.Component {

    constructor() {
        super();
        this.state = {h: 0
                     ,m:0
                     ,s:0
        };


    }

    handleChange(type, event)  {
        switch(type){
            case 'h':
                this.setState({h:event.target.value,
                               m:event.target.value*60,
                               s:event.target.value*60*60 });
                break;
            case 'm':
                this.setState({h:event.target.value/60,
                               m:event.target.value,
                               s:event.target.value*60 });
                break;
            case 's':
                this.setState({h:event.target.value/60/60,
                               m:event.target.value/60,
                               s:event.target.value});
                break;
        }
    }



    render() {
        return (<div >
            hours  : <input type="number" value={this.state.h}  onChange={this.handleChange.bind(this, 'h')}/>
            <br/>
            minutes: <input type="number" value={this.state.m}  onChange={this.handleChange.bind(this, 'm')}/>
            <br/>
            seconds: <input type="number" value={this.state.s}  onChange={this.handleChange.bind(this, 's')}/>
        </div>);
    }

}