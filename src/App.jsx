import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import './App.css';
import DialPad from './components/DialPad';
import Header from './components/Header';
import start from './sounds/start.mp3';
import pause from './sounds/pause.mp3';
import stop from './sounds/impostor-win.mp3';

// const sfx = [
//   { label: 'start', sound: start },
//   { label: 'pause', sound: pause },
//   { label: 'stop', sound: stop },
// ];

class App extends Component {
  constructor() {
    super();
    this.soundPlay = this.soundPlay.bind(this);
  }

  soundPlay(src) {
    const sound = new Howl({
      src: [src],
    });
    sound.play();
  }

  render() {
    const VOLUME = 0.1;
    Howler.volume(VOLUME);
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
        <div className="command-btn">
          <button
            type="button"
            className="start fas fa-play"
            onChange={ this.soundPlay(pause) }
          >
            {' '}
          </button>
          <button
            type="button"
            className="pause fas fa-pause"
            onClick={ this.soundPlay(start) }
          >
            {' '}

          </button>
          <button
            type="button"
            className="stop fas fa-stop"
            onClick={ this.soundPlay(stop) }
          >
            {' '}
          </button>
        </div>

      </div>
    );
  }
}

export default App;
