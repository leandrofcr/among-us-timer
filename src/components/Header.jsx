import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          There is
          <span className="title-spotlight"> 1 Timer </span>
          {' '}
          among us
        </h1>
      </header>
    );
  }
}

export default Header;
