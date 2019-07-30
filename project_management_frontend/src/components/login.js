import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Navbar from '../components/navbar'

class Login extends React.Component {

  handelSubmit = (event) => {
    console.log("username: ", event.target.username.value);
    console.log("password: ", event.target.password.value);
    event.target.reset()
  }

  handelChange = (event) => {
    if (event.target.name === "username") {
      console.log(event.target.value);
    } else if (event.target.name === "password") {
      console.log(event.target.value);
    }
  }

  render() {

      return (
          <div>
              <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                  <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as='h2' color='teal' textAlign='center'>
                       Log-in to your account
                  </Header>
                  <Form size='large' onSubmit={this.handelSubmit}>
                      <Segment stacked>
                      <Form.Input
                        fluid
                        name="username"
                        icon='user'
                        iconPosition='left'
                        placeholder='Username'
                        onChange={this.handelChange}
                      />
                      <Form.Input
                          fluid
                          name="password"
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          onChange={this.handelChange}
                      />

                      <Button color='teal' fluid size='large'>
                          Login
                      </Button>
                      </Segment>
                  </Form>
                  <Message>
                      New to us? <a href='#'>Sign Up</a>
                  </Message>
                  </Grid.Column>
              </Grid>
          </div>
      )
  }
}

export default Login
