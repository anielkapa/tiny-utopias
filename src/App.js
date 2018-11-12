import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Portfolio from './portfolio.js';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <div className="main container">
          <header className="App-header">

            <h1>
              Monika Pawlak die Architektin
            </h1>
          </header>
          <section>
            <Portfolio/>
          </section>
        </div>
      </div>

    );
  }
}

export default App;
