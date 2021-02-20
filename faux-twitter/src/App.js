import Header from './Header'
import Container from './Container'
// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      newTweet: {}
    }
  }

  addTweet = (newTweet) => {
    this.setState({ newTweet: newTweet})
  }
  
  render() {
    return (
      <div className="App">
        <Header addTweet={this.addTweet}/>
        <Container newTweet={this.state.newTweet}/>
      </div>
    );
  }
}

export default App;
