import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialPad from './DialPad';

class Timer extends Component {
  render() {
    const { seconds } = this.props;
    return (
      <div className="main-container">
        <div className="timer-container">
          <span className="timer">
            {seconds}
          </span>
        </div>
        <div className="dial-pad-container">
          <DialPad />
        </div>
        {/* <button type="button" onClick={ this.startTimer }>start</button>
        <button type="button" onClick={ this.pauseTimer }>pause</button> */}
      </div>
    );
  }
}

Timer.propTypes = {
  onChangeFunc: PropTypes.func,
}.isRequired;

export default Timer;
