import React, { Component } from 'react';
import './App.css';
import { Input,Button} from 'antd';
import {observable, action} from "mobx";
import { observer } from "mobx-react"

const Search = Input.Search;


let arr = JSON.parse(localStorage.getItem('arr'))
const numbers = observable(arr);
const addnum = action(value =>  {
  numbers.push(value)
  localStorage.setItem('arr', JSON.stringify(numbers))
} )
const miusnum = action(index => {numbers.splice(index,1)
  localStorage.setItem('arr', JSON.stringify(numbers))
})



const App = observer(class App extends Component {
  handleClick = (val) => {
    addnum(val)
  }
  removeItem = (index,e) => {
    miusnum(index)
    e.stopPropagation();
  }
  addColor = (index) =>{
    
  }
  render() {
    return (
      <div className="App">
       <Search
            placeholder="input search text"
            enterButton="确定"
            size="large"
            onSearch={value => this.handleClick(value)}
          ></Search>
         
    
          <ul>{numbers.map((number,index) =>
          <li key={index} onClick = {this.addColor}  >
            {index}.{number} <Button tpye = "defalut" onClick={this.removeItem.bind(this,index)}>删除</Button>
          </li>)}</ul>
       </div>
    );
  }
})

export default App;
