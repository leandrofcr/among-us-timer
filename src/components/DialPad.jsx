import React, { Component } from 'react';

class DialPad extends Component {
  render() {
    const numbers = [];
    const MAX = 10;
    for (let i = 1; i < MAX; i += 1) {
      numbers.push(<button type="button" key={ i }>{ i }</button>);
    }
    return (
      <div className="dial-pad-buttons">
        {numbers}
        <button type="button" key="del" className="fas fa-backspace" id="del"> </button>
        <button type="button" key={ 0 }>0</button>
        <button type="button" key="clear" id="clear">C</button>
      </div>);
  }
}

export default DialPad;
