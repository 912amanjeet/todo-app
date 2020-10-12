import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItems:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);


  }
  handleInput(e){
    this.setState({
      currentItems:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  additem(e){
    e.preventDefault();
    const newItem=this.state.currentItems;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems= [...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })

    }
  }

  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }

  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  render(){
    return(
      <div className="App">
<header>
  <form id="to-do-form" onSubmit={this.additem}>
<input type="text" placeholder="Enter Text" value={this.state.currentItems.text} onChange={this.handleInput}/>
<button type="submit">Add</button>
  </form>
</header>
<ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
</div>
    );
  }
}
export default App;
