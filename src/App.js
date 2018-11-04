import React, { Component } from 'react';
import logo from './logo.svg';
import {Button} from  'semantic-ui-react';
import TopBar from './components/TopBar.js';
import ContactList from './components/ContactList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopBar></TopBar>
        <ContactList>
        </ContactList>
      </div>
    );
  }
}

export default App;
