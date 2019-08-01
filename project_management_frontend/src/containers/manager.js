import React from 'react'
import Navbar from '../components/navbar';
import ManagerSidebar from './manager/ManagerSidebar';
import  '../style/employee.css'
import  '../style/manager.css'
import ManagerProjectList from './manager/ManagerProjectList';

class Manager extends React.Component {

  state = {
    manager_data: {},
    loaded: false
  }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push('/')
      return
    }
    let config = {
      headers: {
        Authorization: localStorage.token
      }
    }
    fetch(`http://localhost:3000/managers/${this.props.match.params.username}`, config)
      .then(res => res.json())
      .then(data => {
          this.setState({manager_data: data, loaded: true})
      })
  }

  render() {
    if (!this.state.loaded) {
      return "loading"
    }

    return (
      <div className="employee-container">
          <Navbar />
        <div className="container-employee-sidebar-project">
          <ManagerSidebar manager={this.state.manager_data}/>
          <ManagerProjectList data={this.state.manager_data}/>
        </div>
      </div>
    )
  }
}

export default Manager
