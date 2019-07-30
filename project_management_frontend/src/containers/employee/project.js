import React from 'react'
import Tasklist from './tasklist';

class Project extends React.Component {
  mapOverPropject = () => {
      // return this.props.data.manager.projects.map((project) => {
    return this.props.projects.map((project) => {
      return(
        <div key={project.id} className="project-name-div">
          <h3>{project.name}</h3>
          <h5>Progress Report</h5>
          <p>{project.description}</p>
          <progress max="100" value="20"></progress>
          <Tasklist data={project.filtered_tasks}/>
        </div>
      )
    })
  }

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
