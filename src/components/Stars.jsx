import React, { Component } from 'react';
import { Howl } from 'howler';
import '../style.css';
import eject from '../sounds/eject.mp3';
import alert from '../sounds/pause.mp3';

class Stars extends Component {
  constructor() {
    super();
    this.soundPlay = this.soundPlay.bind(this);
  }

  componentDidMount() {
    this.soundPlay(alert);
    this.soundPlay(eject);
  }

  soundPlay(src) {
    const sound = new Howl({
      src,
      volume: 0.5,
    });
    sound.play();
  }

  render() {
    const numberOfStars = 70;
    const stars = [];
    for (let i = 0; i < numberOfStars; i += 1) {
      stars.push(i);
    }
    return (
      <>
        <sky id="sky">
          {stars.map((elem) => <star key={ elem } />)}
        </sky>
        <h2>
          <p>Y</p>
          <p>o</p>
          <p>u</p>
          <p>r</p>
          <p className="w"> </p>
          <p>t</p>
          <p>i</p>
          <p>m</p>
          <p>e</p>
          <p className="w"> </p>
          <p>i</p>
          <p>s</p>
          <p className="w"> </p>
          <p>o</p>
          <p>v</p>
          <p>e</p>
          <p>r</p>

        </h2>
        <boi>
          <rightleg />
          <leftleg />
          <backpack />
          <belly />
          <eye />
          <leftleg />
        </boi>

        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="inset" x="-50%" y="-50%" width="200%" height="200%">
            <feFlood floodColor="black" result="outside-color" />
            <feMorphology in="SourceAlpha" operator="dilate" radius="3.5" />
            <feComposite in="outside-color" operator="in" result="outside-stroke" />
            <feFlood floodColor="#0c9fc4" result="inside-color" />
            <feComposite in2="SourceAlpha" operator="in" result="inside-stroke" />
            <feMerge>
              <feMergeNode in="outside-stroke" />
              <feMergeNode in="inside-stroke" />
            </feMerge>
          </filter>
        </svg>
        <button
          type="button"
          className="try-again-btn"
        >
          {' '}
          Try again :D
        </button>
      </>

    );
  }
}

export default Stars;
