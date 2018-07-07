import React from 'react';

export default class ShoppingListWithFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText:"",
            items: []
        };
    }

     modifyQuantity(e, itemId){
        let updatedItemIndex = this.state.items.findIndex( el => el.id === itemId);
        let updatedItem = this.state.items[updatedItemIndex];
        let noOfUnits = e.target.closest("td").querySelector("input").value;

        if(updatedItem.unit > 0){
            updatedItem.unit = updatedItem.unit- noOfUnits;
        }
       
        let updatedList = this.state.items
        updatedList[updatedItemIndex] = updatedItem;

        return updatedList;
      }

    buy = (e,itemId) => {

        this.setState({ 
            items: this.modifyQuantity(e,itemId)
        });

    }

    delete = (index) => {
        const itemsArr = this.state.items;
        this.setState({ 
          items: [...itemsArr.slice(0,index), ...itemsArr.slice(index+1)]
        });
    }



    add = () => {
        let itemName = this.name.value;
        let itemImageUrl = this.url.value;
        let itemUnit = this.unit.value;

        this.setState({ total:parseInt([this.state.total])+1,items: [...this.state.items, { id:Math.random()*100 ,name: itemName , url: itemImageUrl ,unit: itemUnit}] })
    }

     filterByName = () => {
        let filter = this.nameFilter.value
            this.setState({ 
                filterText: filter
            });
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

        let itemsList = this.state.items
        let filterTxt = this.state.filterText

    
      
        if(filterTxt.length>0){
            itemsList =   itemsList.filter(element => element.name === filterTxt);
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
                  
                
                   
                  </tbody>
               </table>
              
                <table style={style}> 
                <tbody>
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Item Name <input type="text" onChange={() =>  this.filterByName(itemsList)} ref={nameFilter => { this.nameFilter = nameFilter }} /></td>
                        <td>Item Image</td>
                        <td>Item Unit </td>
                        <td></td>
                        <td></td>
                    </tr>
                    {itemsList.map((element, index) => {
                        return <tr key={index}>
                            <td>{element.name}</td>
                            <td><img src={element.url}  height="42" width="42"/></td>
                            <td>{element.unit}</td>
                            <td>
                            <input type="text"  ref={unitsNo => { this.unitsNo = unitsNo }} />
                            <input  type="button" value="Bye!"  onClick={(e) => this.buy(e,element.id)} />
                            </td>
                            <td><input type="button" value="Delete" onClick={() => this.delete(index)} /></td>
                        </tr>
                    })}
                    
                    </tbody>
                   </table>
               
            </div>
        );

    }
}

