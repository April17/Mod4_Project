import React from 'react';
import logo from './logo.svg';
import { Menu, Item } from 'semantic-ui-react'
import './App.css';
import Frontpage from './containers/frontpage';
import Login from './components/login';
import Employee from './containers/employee';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
