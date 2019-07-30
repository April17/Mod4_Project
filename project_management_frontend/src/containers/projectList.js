import React from 'react'
import Project from '../containers/project';


class ProjectList extends React.Component {

    render() {
        console.log(this.props.data);
        
        return (
            <div className="container-projects">
                <Project projects={this.props.data.manager.projects}/>
            </div>
        )
    }
}

export default ProjectList