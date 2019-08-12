import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Register extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const register = await fetch('http://localhost:9000/auth/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedRegister = await register.json();

    console.log(parsedRegister, ' response from register');

    if(parsedRegister.status.message === 'User Logged In'){
      console.log('logged in')
      // programmatically switch between a route

      this.props.history.push('/employee');
    }
  }
  render(){
    return (
     <Form onSubmit={this.handleSubmit}>
       <FormGroup>   
        <Label>
          Username:
          <Input type="text" name='username' onChange={this.handleChange} placeholder='username' />
        </Label>
       </FormGroup>
       <FormGroup>
        <Label>
          Password:
          <Input type="password" name='password' onChange={this.handleChange} placeholder='password' />
        </Label>
       </FormGroup>
       <FormGroup>
        <Button type='Submit' color='warning'>
          Register
        </Button>
       </FormGroup>
     </Form>
      )
  }
}


export default Register;
