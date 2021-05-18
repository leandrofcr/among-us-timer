import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialPad from './DialPad';

class Timer extends Component {
  render() {
    const { sec, min, addTime, reset } = this.props;
    const TEN = 10;
    const minutes = min < TEN ? `0${min}` : min;
    const seconds = sec < TEN ? `0${sec}` : sec;
    return (
      <div className="main-container">
        <div className="timer-container">
          <span className="timer">
            {` ${minutes}:${seconds}`}
          </span>
        </div>
        <div className="dial-pad-container">
          <DialPad addTime={ addTime } reset={ reset } />
        </div>
        {/* <button type="button" onClick={ this.startTimer }>start</button>
        <button type="button" onClick={ this.pauseTimer }>pause</button> */}
      </div>
    );
  }
}

Timer.propTypes = {
  onChangeFunc: PropTypes.func,
  addTime: PropTypes.func,
  sec: PropTypes.number,
  min: PropTypes.number,
}.isRequired;

export default Timer;
