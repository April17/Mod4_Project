import React from 'react'
import { Menu, Item, Input } from 'semantic-ui-react'
import Navbar from '../components/navbar';
import Project from '../containers/project';


class ProjectList extends React.Component {

    render() {

        return (
            <div className="container-projects">
                <Project />
                <Project />
                <Project />
            </div>
        )
    }
}

export default ProjectList