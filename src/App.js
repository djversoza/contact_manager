import React, { Component } from 'react';
import TopBar from './components/TopBar.js';
import ContactList from './components/ContactList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopBar/>
        <ContactList/>
      </div>
    );
  }
}

export default App;
