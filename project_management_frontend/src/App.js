import React from 'react';
// import logo from './logo.svg';
// import { Menu, Item } from 'semantic-ui-react'
import './App.css';
import Employee from './containers/employee';
import Manager from './containers/manager';
import Frontpage from './containers/frontpage';
import Login from './components/login';
import Signup from './components/signup'
import { Switch, Route } from 'react-router-dom'



class App extends React.Component {
  state = {
    token: localStorage.token
  }
  render() {
    return (
      <Switch>

      </Switch>
    );
  }
}

export default App;
