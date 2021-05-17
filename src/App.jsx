import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainButtons from './components/MainButtons';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 5,
      minutes: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.addTime = this.addTime.bind(this);
  }

  componentDidMount() {

  }

  startTimer() {
    const ONE_SECOND = 1000;
    this.timerInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds === 0 && minutes === 0) {
        this.stopTimer();
      }
      if (seconds < 1) {
        this.setState((prevState) => ({ minutes: prevState.minutes - 1, seconds: 59 }));
      } else {
        this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
      }
    }, ONE_SECOND);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.setState({
      seconds: 0,
      minutes: 1,
    });
  }

  addTime(param) {
    this.setState((prevState) => ({
      seconds: prevState.seconds + param,
    }));
  }

  render() {
    const { seconds, minutes } = this.state;
    return (
      <div className="App">
        <Header />
        <Timer
          sec={ seconds }
          min={ minutes }
          addTime={ this.addTime }
          start={ this.startTimert }
        />
        <MainButtons
          startTimer={ this.startTimer }
          pauseTimer={ this.pauseTimer }
          stopTimer={ this.stopTimer }
        />
      </div>
    );
  }
}

export default App;
