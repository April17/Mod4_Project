import React from 'react'
import Navbar from '../components/navbar';
import Sidebar from '../containers/sidebar';
import  '../style/employee.css'
import ProjectList from './projectList';

class Employee extends React.Component {

    state = {
        employee_data: {},
        loaded: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/employees/4')
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











{/* <Navbar />

                <Divider />
                <Header>
                    {this.state.employee_data.employee.name}
                </Header>
                <Grid>
                    <Grid.Column width={4}>
                        <Sidebar manager={this.state.employee_data.manager} coworkers={this.state.employee_data.coworkers}/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <TaskList employee={this.state.employee_data}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                </Grid>
                <Divider /> */}
