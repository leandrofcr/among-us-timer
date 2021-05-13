import React, { Component } from 'react';
import './App.css';
import DialPad from './components/DialPad';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-container">
          <div className="timer-container">
            <span className="timer">
              05:30
            </span>
          </div>
          <div className="dial-pad-container">
            <DialPad />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
