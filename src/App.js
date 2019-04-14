import React, { Component } from 'react';
import Menu from './Components/MainMenu.js';
import Container from './Components/Container';
//import ImagesFrames from './Components/ImagesFrames';
// import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Menu></Menu>
        <Container></Container>
      </div>
    );
  }
}

export default App;
