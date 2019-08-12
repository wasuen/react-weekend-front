import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


const Header = () => {
  return (
    <div>
      <br/>
        <Link to='/'><Button color='primary' size='lg' active>Register</Button></Link>{' '}
        <Link to='/login'><Button color='primary' size='lg' active>login</Button></Link>{' '}
        <Link to='/employee'><Button color='primary' size='lg' active>Employees</Button></Link>
    </div>
    )
}


export default Header;
