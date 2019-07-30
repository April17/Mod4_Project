import React from 'react'
import Project from '../containers/project';


class ManagerProjectList extends React.Component {

    render() {
        console.log(this.props.data.username);
        
        return (
            <div className="container-projects">
                <Project username={this.props.data.username} projects={this.props.data.projects}/>
            </div>
        )
    }
}

export default ManagerProjectList