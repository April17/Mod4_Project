import React from 'react'
import Navbar from '../components/navbar';
import CooworkerList from '../components/cooworkerlist';

class ManagerSidebar extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div className="container-sidebar">
                <div className="employee-name">
                <img src="/images/avatar/helen.jpg"></img>
                    <h3>{this.props.manager.name}</h3>
                </div>
                <CooworkerList coworkers={this.props.manager.employees}/>
            </div>
        )
    }
}

export default ManagerSidebar
