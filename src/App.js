import React, { Component } from 'react';

import About from './components/About';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div id="app-entry">
        <section id="content-section" className="section">
          <div className="container">
            <About />

            <Content />
          </div>

        </section>
      </div>
    )
  }
}

export default App;