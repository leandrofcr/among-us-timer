import React, { Component } from 'react';
import './App.css';
import DialPad from './components/DialPad';
import Header from './components/Header';
import timer from './images/timer.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="timer-container">
          <img src={ timer } alt="timer background" className="timer-background" />
          <div className="timer">Timer</div>

          <DialPad />
        </div>

      </div>
    );
  }
}

export default App;
