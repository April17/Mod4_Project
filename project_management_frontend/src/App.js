import React from 'react';
import logo from './logo.svg';
import { Menu, Item } from 'semantic-ui-react'
import './App.css';
import Navbar from './components/navbar';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
