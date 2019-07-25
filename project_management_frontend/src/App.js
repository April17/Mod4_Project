import React from 'react';
import logo from './logo.svg';
import { Menu, Item } from 'semantic-ui-react'
import './App.css';
import Frontpage from './containers/frontpage';
import Login from './components/login';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Frontpage />
        <Login />
      </div>
    );
  }
}

export default App;
