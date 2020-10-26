import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      pokemon: ''

    }
  }

  componentDidMount(){
    axios.get(`https://pokeapi.co/api/v2/pokemon/45`)
    .then(respond => {
      this.setState({
        pokemon: respond.data
      })
    })
  }

  render(){
    return(
      <div className="App">
        <h1>Name: {this.state.pokemon.name}</h1>
        <h1>Height: {this.state.pokemon.height}</h1>
        <h1>Order: {this.state.pokemon.order}</h1>
        <h1>Id: {this.state.pokemon.id}</h1>

        
      

        
      </div>
    )
  }


}

export default App;
