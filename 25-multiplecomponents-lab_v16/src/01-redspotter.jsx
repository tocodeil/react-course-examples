import React from 'react';

export default class RedSpotter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            boxes: [
                { id: 10, color: "#ff0000" },
                { id: 20, color: "#c0c0c0" },
                { id: 30, color: "#c0c0c0" },
                { id: 40, color: "#c0c0c0" },
                { id: 50, color: "#c0c0c0" },
                { id: 60, color: "#c0c0c0" },
                { id: 70, color: "#c0c0c0" },
                { id: 80, color: "#c0c0c0" },
                { id: 90, color: "#c0c0c0" },
                { id: 100, color: "#c0c0c0" }
            ]
        };
    }

    shuffle = (id) => {
        var _ = require('lodash');

        if (id === "new") {
            this.setState({ boxes: _.shuffle(this.state.boxes) });
            this.setState({ score: 0 });
        } else {
            (id === 10 ?
                this.setState({ score: parseInt([this.state.score]) + 10 }):
                this.setState({ score: parseInt([this.state.score]) - 5 })
            );
            
            this.setState({ boxes: _.shuffle(this.state.boxes) });
        }
    }

    render() {
        return (
            <div>
                <input type="button" value="New Game" onClick={() => this.shuffle("new")} ref={btn => { this.btn = btn }} /> Score : <label>{this.state.score}</label>
                <p />
                <div>
                    {this.state.boxes.map((element, index) => {
                        return <div key={index} id={element.id} style={{
                            backgroundColor: element.color,
                            width: '50px', height: '50px', float: 'left', margin: '5px'}}
                        onClick={() => this.shuffle(element.id)} ref={(box) => { this.box = box }}></div>
                    })}
                </div>
            </div>
        );

    }
}

