import React from 'react'
import { Menu, Item, Input } from 'semantic-ui-react'
import Navbar from '../../components/navbar';
import CooworkerList from '../../components/cooworkerlist';

class ManagerSidebar extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div className="container-sidebar">
                <div className="employee-name">
                <img src="/images/avatar/helen.jpg"></img>
                    <h3>{this.props.manager.name}</h3>
                </div>
                <div className="create-button-div">
                    <button className="create-project-button">Create Project</button>
                </div>
                <CooworkerList coworkers={this.props.manager.employees}/>
            </div>
        )
    }
}

export default ManagerSidebar
