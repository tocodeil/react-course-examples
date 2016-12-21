/**
 * Lab 02: Shopping List
 *
 * Build a component that shows a form and a list of shopping items.
 * Form includes 3 fields:
 *  - A name field
 *  - An image url field (optional)
 *  - A quantity field
 *  - An add button to add the item to the list
 *
 * In the list each item is presented with:
 *  - Its name, image, required quantity and purchasing quantity
 *  - A button "Buy" which buys the items (in the quntity specified)
 *  - A button "Delete" which deletes an item from the list
 *  - When an item is fully bought draw a line through it
 *
 * Use another component to show the total number of items in the list
 *
 */

import React from 'react';

export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {}
        }
    }

    addItem = () => {
        let items = this.state.items;
        let newItem = {};
        items.push(this.state.currentItem);
        this.setState({
            items: items,
            currentItem: newItem
        });
    }

    buyItem(index){
        console.log("update item quantity");
        let item = this.state.items[index];
        let items = this.state.items;
        if (item.buyQuantity > item.quantity){
            console.log("an error msg should be displayed, or a validator should be used");
            item.quantity = 0
        }else{
            item.quantity -= item.buyQuantity;
        }
        item.buyQuantity = 0;
        items[index] = item;
        this.setState({items: items});

    }

    removeItem(index){
        console.log("remove item");
        let items = this.state.items;
        items.splice(index,1);
        this.setState({items: items});

    }

    updateQuantity(index, event){
        let item = this.state.items[index];
        let items = this.state.items;
        item.buyQuantity = Number(event.target.value);
        items[index] = item;
        this.setState({items: items});

    }

    onItemChange = (evt) => {
        let item = this.state.currentItem;
        let itemVal = isNaN(evt.target.value) ? evt.target.value : Number(evt.target.value);

        item[evt.target.name] = itemVal;

        this.setState({
            currentItem: item
        });
    }

    render() {
        const isTableVisible = this.state.items.length > 0;

        return (<div>
                <ShoppingItem addItem={this.addItem}
                              name={this.state.currentItem.name}
                              quantity={this.state.currentItem.quantity}
                              onChange={this.onItemChange}/>
                {isTableVisible &&
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity Left</th>
                            <th>Quantity to Buy</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.items.map((item, idx) => (
                            <ShoppingListItem key={idx} item={item} index={idx} onChange={this.updateQuantity.bind(this, idx)} buyItem={this.buyItem.bind(this, idx)} removeItem={this.removeItem.bind(this, idx)} />
                        ))}
                        </tbody>
                    </table>
                </div>
                }
                <ShoppingItemsCount count={this.state.items.length}/>
            </div>
        );
    }
}


export function ShoppingItem(props) {
    return (
        <div style={{display: "inline-block", width: "100%"}}>
            <label htmlFor="name">Name: </label>
            <input name="name" required="true" type="text"
                   value={props.name}
                   placeholder="please add item name" onChange={props.onChange}/>
            <span style={{width: "20px", display: "inline-flex"}}/>
            <label htmlFor="quantity">Quantity: </label>
            <input name="quantity" required="true"
                   type="number"
                   value={props.quantity}
                   placeholder="please add item quantity" onChange={props.onChange}/>
            <span style={{width: "20px", display: "inline-flex"}}/>
            <button onClick={props.addItem}>+</button>
        </div>);
};

ShoppingItem.propTypes = {
    addItem: React.PropTypes.func,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.number.isRequired
};

ShoppingItem.defaultProps = {
    name: "",
    quantity: 0
}

export function ShoppingItemsCount(props) {
    return (<p>Total items: {props.count}</p>);
};

ShoppingItemsCount.propTypes = {
    count: React.PropTypes.number
};

export function ShoppingListItem(props) {
    return (
        <tr key={props.index} style={{textDecoration: (props.item.quantity>0)?"none":"line-through"}}>
            <td>{props.item.name}</td>
            <td><input name="quantity"
                       type="number"
                       value={props.item.quantity}
                       disabled="true"/></td>
            <td><input name="buyQuantity" required="true"
                       type="number"
                       value={props.item.buyQuantity}
                       onChange={props.onChange} min="1" max={props.item.quantity}/></td>
            <td>
                <button onClick={props.buyItem}>Buy</button>
                <button onClick={props.removeItem}>Remove</button>
            </td>
        </tr>
    )
}

ShoppingListItem.propTypes = {
    buyItem: React.PropTypes.func,
    removeItem: React.PropTypes.func,
    onChange: React.PropTypes.func,
    item: React.PropTypes.object.isRequired,
    index: React.PropTypes.number
};

ShoppingListItem.defaultProps = {
    buyQuantity: 0
}

export function ShoppingListFilter(props) {
    return (
        <div>
            
        </div>
    )
}




