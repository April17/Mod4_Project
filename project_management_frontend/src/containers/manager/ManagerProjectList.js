import React from 'react'
import ManagerProject from './ManagerProject';


class ManagerProjectList extends React.Component {

    render() {
        console.log(this.props.data.employees);
        
        return (
            <div className="container-projects">
                <ManagerProject employees={this.props.data.employees} username={this.props.data.username} managerProjects={this.props.data.projects}/>
            </div>
        )
    }
}

export default ManagerProjectList
