import React from 'react';

export default class ShoppingListWithFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            items: [],
            fullList:[]
        };
    }

    buy = (itemId) => {
        let updatedItemIndex = this.state.items.findIndex( el => el.id === itemId);
        let updatedItem = this.state.items[updatedItemIndex];
       
        if(updatedItem.unit > 0){
            updatedItem.unit = updatedItem.unit-1;
        }
       
        let updatedList = this.state.items
        updatedList[updatedItemIndex] = updatedItem;

        this.setState({ 
            items: updatedList,
            fullList: updatedList
        });

    }

    delete = (index) => {
        const itemsArr = this.state.items;
        this.setState({ 
          items: [...itemsArr.slice(0,index), ...itemsArr.slice(index+1)],
          fullList: [...itemsArr.slice(0,index), ...itemsArr.slice(index+1)]
        });
    }


    filterByName = () => {
        let filter = this.nameFilter.value;
        
        if(filter.length == 0){
            this.setState({ 
                items: this.state.fullList
            });
        }else{
            let filteredItems = this.state.items.filter( el => el.name === filter );
            if(filteredItems.length > 0){
                this.setState({ 
                    items: filteredItems
                });
             }
        }
    }

    isBought = () => {
        let filter = this.boughtItems.checked;
        
        if(!filter){
            this.setState({ 
                items: this.state.fullList
            });
        }else{
            let filteredItems = this.state.items.filter( el => el.unit === 0 );
            if(filteredItems.length > 0){
                this.setState({ 
                    items: filteredItems
                });
            }
        }
    }



    add = () => {
        let itemName = this.name.value;
        let itemImageUrl = this.url.value;
        let itemUnit = this.unit.value;

        this.setState({ total:parseInt([this.state.total])+1,items: [...this.state.items, { id:Math.random()*100 , name: itemName , url: itemImageUrl ,unit: itemUnit}],
        fullList: [...this.state.items, { id:Math.random()*100 , name: itemName , url: itemImageUrl ,unit: itemUnit}] })
    }


    render() {

        const style = {
            fontFamily: 'Arial',
            padding: 10,
            color: "#444",
            border: "3px solid black",
            position: "relative",
            width: "700px",
            height: "25px",
            letterSpacing: 0,
            overflow: "hidden",
            fontSize: 14,
        }

        return (
            <div>
                 <table>
                    <tbody>
                    <tr>
                            <td>Name:</td>
                            <td><input type="text" ref={name => { this.name = name }} /></td>
                    </tr>
                    <tr>
                            <td>Image:</td>
                            <td> <input type="text"  ref={url => { this.url = url }}/> Use full path</td>
                    </tr>
                    <tr>
                            <td>Unit:</td>
                            <td><input type="text"  ref={unit => { this.unit = unit }} /></td>
                    </tr>
                    <tr>
                            <td></td>
                            <td><input type="button" value="Add Item" onClick={this.add} /><p /></td>
                    </tr>
                    <tr>
                            <td>Total Items:</td>
                            <td>{this.state.total}</td>
                    </tr>
                
                   
                  </tbody>
               </table>
              
                <table style={style}> 
                <tbody>
                     <tr>
                        <td ></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Item Name <input type="text" onChange={() => this.filterByName()} ref={nameFilter => { this.nameFilter = nameFilter }} /></td>
                        <td>Item Image</td>
                        <td>Item Unit </td>
                        <td><input type="checkbox" onChange={() => this.isBought()} ref={boughtItems => { this.boughtItems = boughtItems }}/> Done?</td>
                        <td></td>
                    </tr>
                    {this.state.items.map((element, index) => {
                        return <tr key={index}>
                            <td>{element.name}</td>
                            <td><img src={element.url}  height="42" width="42"/></td>
                            <td>{element.unit}</td>
                            <td><input type="button" value="Done!" onClick={() => this.buy(element.id)} ref={doneBtn => { this.doneBtn = doneBtn }}/></td>
                            <td><input type="button" value="Delete" onClick={() => this.delete(index)} /></td>
                        </tr>
                    })}
                    </tbody>
                   </table>
               
            </div>
        );

    }
}

