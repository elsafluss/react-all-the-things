import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      rand: Math.floor(Math.random() * Math.floor(1118)),
      pokemon: {},
      date: ''
    }
  }

  getPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ pokemon: data }))
  }
  
  handleClick = (event) => {
    event.preventDefault()
    this.getPokemon(this.state.rand)
    const date = new Date(Date.now()).toLocaleString()
    this.setState({ date: date })
  }

  render() {
    if (!this.state.pokemon.species) {
      return <div className="home"><button onClick={this.handleClick} className="button">I took my meds, give me my Pokemon</button></div>
    } else {
      return (
        <div className="App">
        <p>You caught a {this.state.pokemon.name}!</p>
        <img src={this.state.pokemon.sprites.front_default} alt="sprite" className="sprite"></img>
        <p>{this.state.date}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>Remember to take a screenshot!</p>
        </div>
      );
    }
  }
}

export default App