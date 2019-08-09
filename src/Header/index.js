import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      
        <span><Link to='/'>Register</Link></span><br/>
        <span><Link to='/employee'>Employees</Link></span>
    
    </header>
    )
}


export default Header;
