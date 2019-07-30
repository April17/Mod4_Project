import React from 'react'
import Tasklist from './tasklist';

class Project extends React.Component {

    mapOverPropject = () => {
        return this.props.employeeProjects.map((project) => {
            return(
                <div className="project-name-div">
                    <h3>{project.name}</h3>
                    <h5>Progress Report</h5>
                    <progress max="100" value="80"></progress>
                    <p>{project.description}</p>
                    <Tasklist username={this.props.username} data={project}/>
                </div>
            )
        })
    }
    
    render() {
        console.log(this.props.username);
        
        return (
            <div className="project-div">
                {this.mapOverPropject()}
            </div>
        )
    }
}

export default Project