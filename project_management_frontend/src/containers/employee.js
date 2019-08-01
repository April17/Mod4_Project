import React from 'react'
import Navbar from '../components/navbar';
import Sidebar from './employee/sidebar';
import  '../style/employee.css'
import ProjectList from './employee/projectList';

class Employee extends React.Component {

    state = {
        employee_data: {},
        loaded: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/employees/1')
            .then(res => res.json())
            .then(data => {
                this.setState({employee_data: data, loaded: true})
            })
    }

    render() {
        console.log(this.state.employee_data)
        if (!this.state.loaded ) {
            return "loading"
        } 

        return (
            <div className="employee-container">
                    <Navbar />
                <div className="container-employee-sidebar-project">
                    <Sidebar employee={this.state.employee_data}/>
                    <ProjectList data={this.state.employee_data}/>
                </div>
            </div>
        )
    }
}

export default Employee