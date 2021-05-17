import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainButtons from './components/MainButtons';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 600,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  componentDidMount() {

  }

  startTimer() {
    const ONE_SECOND = 1000;
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, ONE_SECOND);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className="App">
        <Header />
        <Timer seconds={ seconds } />
        <MainButtons startTimer={ this.startTimer } pauseTimer={ this.pauseTimer } />
      </div>
    );
  }
}

export default App;
