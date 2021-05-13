import React, { Component } from 'react';

class DialPad extends Component {
  constructor() {
    super();
    this.renderDialPad = this.renderDialPad.bind(this);
  }

  renderDialPad() {
  }

  render() {
    const numbers = [];
    const MAX = 10;
    for (let i = 0; i < MAX; i += 1) {
      numbers.push(<button type="button" key={ i }>{ i }</button>);
    }
    return (
      <div className="dial-pad-buttons">
        {numbers}
      </div>);
  }
}

export default DialPad;
