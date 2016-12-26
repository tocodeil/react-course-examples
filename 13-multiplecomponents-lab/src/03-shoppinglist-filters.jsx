/**
 * Lab 03: Shopping List Filters
 *
 * Add two filters to the shopping list built in previous lab:
 *  - Ability to show only products matching a given name
 *  - Ability to show only products that were fully bought
 */
import React from "react";

function ShoppingItemsCount(props) {
	return <p>Total items: {props.count}</p>
}

export default class ShoppingListFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};
		this.getParameters.bind(this);
	}

	addItem() {
		const nameInput = this.refs.newItemName;
		const imageInput = this.refs.newItemImage;
		const neededQuantityInput = this.refs.newItemNeededQuantity;
		const id = new Date().getTime();
		const items = this.state.items;
		items.push({id: id, name: nameInput.value, image: imageInput.value, neededQuantity: neededQuantityInput.value});
		this.setState(items);

		nameInput.value = '';
		imageInput.value = '';
		neededQuantityInput.value = '';
	}

	updateItemQuantity = (id, newValue) => {
		const item = this.state.items.find((item) => item.id == id);
		item.neededQuantity = newValue;
		this.setState({items: this.state.items});
	};

	removeItem = (id) => {
		const items = this.state.items.filter((item) => item.id != id);
		this.setState({items});
	};

	filterDefined = () => {
		const parameters = this.getParameters();
		return parameters.filter != '' || parameters.showOnlyFullyBought;
	};

	filteredItems = () => {
		const parameters = this.getParameters();
		console.log("parameters: ");
		console.log(parameters);
		let list = this.state.items;
		console.log("Before filter 1: items in list = " + list.length);
		if (parameters.filter != '') {
			console.log("Activating filter 1");
			list = list.filter((item) => item.name.includes(parameters.filter));
		}

		console.log("Before filter 2: items in list = " + list.length);
		if (parameters.showOnlyFullyBought) {
			console.log("Activating filter 2");
			list = list.filter((item) => item.neededQuantity == 0);
		}
		console.log("Final: items in list = " + list.length);
		return list;
	};

	filterFullyBoughtItems() {
		this.setState({items: this.state.items});
	}

	getParameters() {
		const showOnlyFullyBoughtInput = this.refs.showOnlyFullyBought;
		const filterInput = this.refs.filter;
		let parameters = {showOnlyFullyBought: false, filter: ''};
		console.log(showOnlyFullyBoughtInput);
		if (filterInput !== undefined && showOnlyFullyBoughtInput !== undefined) {
			parameters = {showOnlyFullyBought: showOnlyFullyBoughtInput.checked, filter: filterInput.value}
		}
		return parameters;
	}

	render() {
		return(
			<div>
				<div>
					<form>
						<div>
							<input type="checkbox" ref="showOnlyFullyBought" onClick={() => this.filterFullyBoughtItems()}/>Show only fully bought items
							<br />
							Filter:<input type="text" ref="filter" onChange={() => this.filterFullyBoughtItems()} />
						</div>
						<div>
							Name:<input type="text" ref="newItemName" />
							Image:<input type="text" ref="newItemImage" />
							Needed quantity:<input type="number" ref="newItemNeededQuantity" />
							<button type="button" onClick={() => this.addItem()}>Add item</button>
						</div>
					</form>
				</div>
				<div>
					<ShoppingItemsCount count={this.state.items.length} />
					{this.filterDefined() && <div>*** Filtered list ***</div>}
					<table style={{border: "1px solid red"}}>
						<thead>
						<tr>
							<td>Name</td>
							<td>Image</td>
							<td>Needed quantity</td>
							<td></td>
							<td></td>
						</tr>
						</thead>
						<tbody>
						{
							this.filteredItems().map((item) => {
								return <ListItem {...item} updateItemQuantity={this.updateItemQuantity} removeItem={this.removeItem} key={item.id}/>
							})
						}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	updateItem = () => {
		const boughtItemsInput = this.refs.boughtItems;
		const boughtItems = boughtItemsInput === undefined ? 0 : boughtItemsInput.value;
		const newValue = this.props.neededQuantity - boughtItems;
		if (newValue < 0) {
			alert("I don't need that much !!");
		} else {
			this.props.updateItemQuantity(this.props.id, newValue);
		}
		boughtItemsInput.value = '';
	};

	removeItem = () => {
		this.props.removeItem(this.props.id);
	};

	render() {
		const props = this.props;
		const textStyle = props.neededQuantity == 0 ? {textDecoration: "line-through"} : {};
		const buttonsStyle = props.neededQuantity == 0 ? {display:"none" } : {};

		return <tr>
			<td style={textStyle}>{props.name}</td>
			<td style={textStyle}>{props.image}</td>
			<td style={textStyle}>{props.neededQuantity}</td>
			<td style={buttonsStyle}>Bought:
				<input type="number" ref="boughtItems"/>
				<input type="button" onClick={this.updateItem} value="Update"/>
			</td>
			<td style={buttonsStyle}><input type="button" value="Remove item" onClick={this.removeItem}/></td>
		</tr>
	}
}
