import React, { Component } from 'react';
import AppRouting from './app.routing';

import { Header as HeaderComponent } from './components/common/header';
import { Footer as FooterComponent } from './components/common/footer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <div className="app-container">
          <AppRouting />
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
