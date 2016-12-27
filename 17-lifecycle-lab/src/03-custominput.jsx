import React from "react";

export default class CustomComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {index: 0};
		this.elements = 4;
		this.refName.bind(this);
	}

	refName(i) {
		return "letter" + i;
	}

	keyPressed(event, index) {
		const refName = this.refName(index);
		const element = this.refs[refName];
		element.innerHTML = event.key;

		this.setState({index: (index + 1) % this.elements});
	}

	componentDidUpdate() {
		const element = this.refs[this.refName(this.state.index)];
		element.focus();
	}

	render() {
		const current = this.state.index;
		return (<div>
			{
				Array.from(Array(this.elements).keys()).map((i) => {
					const bgColor = current == i ? 'red' : 'gray';
					const style = {width: 50, height: 50, background: bgColor, margin: 5, padding: 10,
						display: "inline-block", verticalAlign: "top", textAlign: "center",};
					return (
						<div onKeyPress={(event) => this.keyPressed(event, i)} tabIndex={i + 1} ref={this.refName(i)} key={i}
							 style={style} onClick={() => this.setState({index: i})}
						/>
					);
				})
			}
			<br/>
		</div>);
	}
}

