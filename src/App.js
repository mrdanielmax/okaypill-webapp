import React, { Component } from 'react';
import './App.css';
import Cookies from 'universal-cookie';

class App extends Component {
  render() {
    // const cookies = new Cookies();
    // cookies.set('myCat', 'Pacman', { path: '/' });
    // console.log(cookies.get('myCat')); // Pacman

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Okay Pill</h1>
        </header>
        <p className="App-intro">
          Coming soon.
        </p>
      </div>
    );
  }
}

export default App;
