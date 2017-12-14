import React, { Component } from 'react';
import Toggle from './Toggle'
import './App.css';

class App extends Component {
  logging = (log) => console.log(log)
  render() {
    return (
      <div>
        <Toggle
          onToggle={this.logging}
        />
      </div>
    );
  }
}

export default App;
