import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';


const Header = () => {
  return (
    <div>
      <ButtonGroup>
          <Link to='/'><Button color='primary'>Register</Button></Link>
          <Link to='/login'><Button color='primary'>login</Button></Link>
          <Link to='/employee'><Button color='primary'>Employees</Button></Link>
      </ButtonGroup>
    </div>
    )
}


export default Header;
