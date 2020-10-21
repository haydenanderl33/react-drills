import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      someWords: ""
    };
  }

  handleChange(val) {
    this.setState({ someWords: val });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <p>{this.state.someWords}</p>
      </div>
    );
  }
}

export default App;




