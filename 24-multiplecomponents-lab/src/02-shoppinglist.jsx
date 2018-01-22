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

function ShoppingItemsCount(props) {
  return <p>Total items: {props.count}</p>
}

export default React.createClass({
});


