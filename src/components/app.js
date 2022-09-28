import React, { Component } from 'react';

import Align from './align';
import ColorText from './colorText';
import Counter from './counter';
import HideMe from './hideMe';
import Incrementor from './incrementor';
import ToggleClocks from './toggleClock';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Welcome To My Page Of Sick Tricks</h1>
        <Align />
        <HideMe />
        <Incrementor />
        <Counter />
        <ColorText />
        <ToggleClocks />
      </div>
    );
  }
}
