import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList.js';
import * as firebase from 'firebase';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyDotim8OSLeLMsF69OWkt3UPe3DjJ8sIZU",
  authDomain: "blocitoff-ec6cd.firebaseapp.com",
  databaseURL: "https://blocitoff-ec6cd.firebaseio.com",
  projectId: "blocitoff-ec6cd",
  storageBucket: "blocitoff-ec6cd.appspot.com",
  messagingSenderId: "338431175238"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">"Blocitoff!"</header>
        <aside>
          <TaskList
            firebase = {firebase}
          />
        </aside>
      </div>
    );
  }
}

export default App;
