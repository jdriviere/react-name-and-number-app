import React, { Component } from 'react';

import Name from './components/Name';
import Number from './components/Number';

const style = {
  margin: '50px auto',
  maxWidth:600
};

class App extends Component {
  // Render
  render() {
    return (
      <div className="make-text-centered">
        <div style={style} className="box make-elevated">
          <Name />
          <Number />
        </div>
      </div>
    );
  }
}

export default App;
