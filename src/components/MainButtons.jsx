import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
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
    return sfx.map((soundObj, index) => (
      <button
        type="button"
        key={ index }
        id={ `${soundObj.label}-btn` }
        className={ `fas fa-${soundObj.label}` }
        onClick={ () => this.soundPlay(soundObj.sound) }
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

export default MainButtons;
