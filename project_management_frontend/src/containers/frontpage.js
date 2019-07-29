import React from 'react'
import { Header } from 'semantic-ui-react'
import Navbar from '../components/navbar'

class Frontpage extends React.Component {


    render() {
        return (
            <div>
                <Navbar />
                <Header as='h1'>Welcome to Glorious Project Management</Header>
            </div>
        )
    }
}

export default Frontpage