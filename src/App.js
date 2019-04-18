import React, { Component } from 'react';
import './App.css';
import { Input } from 'antd';
import {observable, action} from "mobx";
import { observer } from "mobx-react"

const Search = Input.Search;

var numbers = observable([1,2,3]);
const addnum = action(value => numbers.push(value))
const miusnum = action(index => numbers.splice(index,1))


const App = observer(class App extends Component {
  handleClick = (val) => {
    addnum(val)
  }
  removeItem = (index) => {
    miusnum(index)
  }
  render() {
    return (
      <div className="App">
       <Search
            placeholder="input search text"
            enterButton="确定"
            size="large"
            onSearch={value => this.handleClick(value)}
          />
          <ul>{numbers.map((number,index) =>
          <li key={index} >
            {number} <button onClick={this.removeItem.bind(this,index)}>删除</button>
          </li>)}</ul>
       </div>
    );
  }
})

export default App;
