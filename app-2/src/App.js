import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      myArr: ['glasses','jacket','shirt']
    };
  }

  render() {
    let things = this.state.myArr.map((element, index) => {
      return <h2 mykey={index}>{element}</h2>;
    });

    return <div className="App">{things}</div>;
  }
}

export default App;