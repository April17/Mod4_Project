import React from 'react'
import Project from '../containers/project';


class ProjectList extends React.Component {

    render() {
        return (
            <div className="container-projects">
                <Project data={this.props.data}/>
            </div>
        )
    }
}

export default ProjectList