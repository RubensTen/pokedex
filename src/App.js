import React, { Component } from 'react';
import AppRouting from './app.routing';

import {Header as HeaderComponent} from './components/common/header';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="app-container">
          <AppRouting />
        </div>
      </div>
    );
  }
}

export default App;
