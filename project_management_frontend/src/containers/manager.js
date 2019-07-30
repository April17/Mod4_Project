import React from 'react'
import Navbar from '../components/navbar';
import ManagerSidebar from '../containers/ManagerSidebar';
import  '../style/employee.css'
import ManagerProjectList from './ManagerProjectList';

class Manager extends React.Component {

    state = {
        manager_data: {},
        loaded: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/managers/4')
            .then(res => res.json())
            .then(data => {
                this.setState({manager_data: data, loaded: true})
            })
    }

    render() {
        console.log(this.state.manager_data)
        if (!this.state.loaded ) {
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









