import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from "./parent-child/Parent"
import Child from "./parent-child/Child"

class App extends Component {
  render() {
    return (
    <div>
    <Parent/>
      </div>
    );
  }
}

export default App;
