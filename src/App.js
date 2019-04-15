import React, { Component } from 'react';
import Container from './Components/Container';
import './App.css';

// TO DO: rendering all the components together//

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Let's test your memory!</h1>
        <h2 className='instructions'>Try not to click the same image twice!!!</h2>
        <Container/>
      </div>
      
    );
  }
}

export default App;
