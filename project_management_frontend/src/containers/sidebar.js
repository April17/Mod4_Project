import React from 'react'
import { Menu, Item, Input } from 'semantic-ui-react'
import Navbar from '../components/navbar';
import CooworkerList from '../components/cooworkerlist';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="container-sidebar">
                <div className="employee-name">
                <img src="/images/avatar/helen.jpg"></img>
                    <h3>Employee Name</h3>
                    <p>username</p>
                </div>
                <div className="manager-name">
                    <h3>Manager Name</h3>
                    <p>username</p>
                </div>
                <CooworkerList />
            </div>
        )
    }
}

export default Sidebar