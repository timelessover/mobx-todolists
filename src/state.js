import React, { Component } from 'react';
import './App.css';
import { Input } from 'antd';

const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {arr : []};
  }
  
  handleClick = (val) => {
    this.state.arr.push(val)
    this.setState({
      arr: this.state.arr
    })
  }
  removeItem = (index) => {
    this.state.arr.splice(index,1)
    this.setState({
      arr: this.state.arr
    })
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
          <ul>{this.state.arr.map((number,index) =>
          <li key={index} >
            {number} <button onClick={this.removeItem.bind(this,index)}>删除</button>
          </li>)}</ul>
       </div>
    );
  }
}

export default App;
