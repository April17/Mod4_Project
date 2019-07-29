import React from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'

class Navbar extends React.Component {

    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    getSearch = (event) => {
      console.log(event.target.value);
    }

    getClicked = (event) => {
      console.log(event);
    }

    render() {
        const { activeItem } = this.state
        return (
          <div>
            <Menu pointing>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              <Menu.Item>
                <Dropdown text='File'>
                  <Dropdown.Menu onClick={this.getClicked}>
                    <Dropdown.Item text='New' />
                    <Dropdown.Item text='Open...' description='ctrl + o' />
                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                    <Dropdown.Item text='Rename' description='ctrl + r' />
                    <Dropdown.Item text='Make a copy' />
                    <Dropdown.Item icon='folder' text='Move to folder' />
                    <Dropdown.Item icon='trash' text='Move to trash' />
                    <Dropdown.Divider />
                    <Dropdown.Item text='Download As...' />
                    <Dropdown.Item text='Publish To Web' />
                    <Dropdown.Item text='E-mail Collaborators' />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input onChange={this.getSearch} icon='search' placeholder='Search...' />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </div>
        )
    }
}

export default Navbar
