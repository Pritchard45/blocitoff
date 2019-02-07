import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDotim8OSLeLMsF69OWkt3UPe3DjJ8sIZU",
  authDomain: "blocitoff-ec6cd.firebaseapp.com",
  databaseURL: "https://blocitoff-ec6cd.firebaseio.com",
  projectId: "blocitoff-ec6cd",
  storageBucket: "blocitoff-ec6cd.appspot.com",
  messagingSenderId: "338431175238"
};
firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
