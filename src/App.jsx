import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainButtons from './components/MainButtons';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timer />
        <MainButtons />
      </div>
    );
  }
}

export default App;
