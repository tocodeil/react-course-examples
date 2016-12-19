/**
 * Lab 03: Shopping List Filters
 *
 * Add two filters to the shopping list built in previous lab:
 *  - Ability to show only products matching a given name
 *  - Ability to show only products that were fully bought
 */

/**
 * Created by ofek_am on 18/12/2016.
 */
import React from 'react';
import _ from 'underscore';

export default class ShoplistFilter extends React.Component{

    static propTypes = {

    };

    static defaultProps = {

    };

    id=0;

    items=[];

    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.buy = this.buy.bind(this);
        this.filter = this.filter.bind(this);
    }

    state={
        items:[],
    }

    add(e){
        let name=document.getElementById('name').value;
        let picture=document.getElementById('url').value;
        let units=document.getElementById('units').value;
        if(name==''||name==undefined){
            alert("Must give a name");
            return;
        }

        if(units==undefined||units<=0){
            alert("Units must be greater than 0");
            return;
        }
        let item={id:this.id++,name:name,picture:picture,units:units,bought:0};
        this.items.push(item);
        this.setState({items:this.items});
    }

    remove(e,id){
        this.items.splice(this.items.find((item)=>id==item.id),1);
        this.setState({items:this.items});
    }

    buy(e,id){
        debugger;
        let idx=this.state.items.indexOf(this.state.items.find(item=>id==item.id));
        if(this.state.items[idx].units>=1){
            this.state.items[idx].units-=1;
            this.state.items[idx].bought+=1;
            this.setState({items:this.state.items});
        }

        if(this.state.items[idx].units==0){
            e.target.disabled=true;
            e.target.parentElement.parentElement.style['text-decoration']='line-through';
        }

    }


    filter(e){
        debugger;
       let name=document.getElementById('nameFilter').value;
       let bought=document.getElementById('boughtFilter').checked;
       let results;
       //name filter
       results=_.filter(this.items,(item)=>{
           return item.name.includes(name);
       });

       //bought filter
       if(bought==true){
            results=_.filter(results,(item)=>{
                return item.units==0;
            });
        }


       this.setState({items:results});
    }


    render(){
        return (<div>
            <form>
                <label>Item Name: </label>
                <input id="name" type="text" required/><br></br><br></br>
                <label>Item Picture Url: </label>
                <input id="url" type="url"/><br></br><br></br>
                <label>Units/Weight: </label>
                <input id="units" type="number"/>
                <input type="button" value={'Add'} onClick={this.add}/><br></br>
            </form>
            <br></br>
            <label>Name Filter: </label><input id="nameFilter" type="text"/><br></br>
            <label>Show Only Bought:</label><input id="boughtFilter" type="checkbox"/><br></br>
            <button onClick={this.filter}>Filter list</button>
            <table>
                <tbody>
                {this.state.items.map((item,idx)=>(
                    <tr key={item.id}>
                        <td><img style={{width:50,height:50}} src={item.picture} alt="No image"/></td>
                        <td><label>Name: {item.name}</label></td>
                        <td><label>Units: {item.units}</label></td>
                        <td><button onClick={(e)=>{this.remove(e,item.id)}}>X</button></td>
                        <td><button onClick={(e)=>{this.buy(e,item.id)}}>Buy</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>)
    }
}


