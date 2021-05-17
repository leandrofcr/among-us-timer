import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import PropTypes from 'prop-types';
import start from '../sounds/start.mp3';
import pause from '../sounds/pause.mp3';
import stop from '../sounds/impostor-win.mp3';

const sfx = [
  { label: 'play', sound: start },
  { label: 'pause', sound: pause },
  { label: 'stop', sound: stop },
];

class MainButtons extends Component {
  constructor() {
    super();
    this.soundPlay = this.soundPlay.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  soundPlay(src) {
    const sound = new Howl({
      src,
      volume: 0.5,
    });
    sound.play();
  }

  renderButtons() {
    const { startTimer, pauseTimer, stopTimer } = this.props;
    return sfx.map((soundObj, index) => (
      <button
        type="button"
        key={ index }
        id={ `${soundObj.label}-btn` }
        className={ `fas fa-${soundObj.label}` }
        onClick={ () => {
          this.soundPlay(soundObj.sound);
          if (soundObj.label === 'play') {
            startTimer();
          }
          if (soundObj.label === 'pause') {
            pauseTimer();
          }
          if (soundObj.label === 'stop') {
            stopTimer();
          }
        } }
      >
        {' '}
      </button>
    ));
  }

  render() {
    const VOLUME = 0.1;
    Howler.volume(VOLUME);
    return (
      <div className="main-buttons">
        {this.renderButtons()}
      </div>);
  }
}

MainButtons.propTypes = {
  play: PropTypes.func,
  pause: PropTypes.func,
  // stop: PropTypes.func,
}.isRequired;

export default MainButtons;
