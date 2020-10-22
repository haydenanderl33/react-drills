import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       listFiltered:'',
//       myList : ['cat', 'dog', 'bat']
//     }
//   }

//   render(){
    
    
    
//     return (
//       // let {myList} = this.state.myList 
      
//       <ul>
//        <input type="text" />
//         <h2>{this.state.myList[0]}</h2>
//         <h2>{this.state.myList[1]}</h2>
//         <h2>{this.state.myList[2]}</h2>
        
//       </ul>
//     )
//   }







// }

// export default App



class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: '',
      myList: ['cat', 'dog', 'bat']
    };
  }

  handleChange(notFilter) {
    this.setState({ filterString: notFilter });
  }

  render() {
    let myListdisplay = this.state.myList
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {myListdisplay}
      </div>
    );
  }
}

export default App;
