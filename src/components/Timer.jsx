import React, { Component } from 'react';
import DialPad from './DialPad';

class Timer extends Component {
  render() {
    return (
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
    );
  }
}

export default Timer;
