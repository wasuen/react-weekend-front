import React from 'react';
import { Link } from 'react-router-dom';
import { Label ,Button, Form } from 'semantic-ui-react';


const Header = () => {
  return (
    <header>
      <Form>
        <Label>
          <span><Link to='/'><Button>Register</Button></Link></span><br/>
          <span><Link to='/employee'><Button>Employees</Button></Link></span>
          <span><Link to='/login'><Button>login</Button></Link></span>
        </Label>
    </Form>
    </header>
    )
}


export default Header;
