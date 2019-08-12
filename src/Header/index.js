import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { HeaderContainer, HeaderLeft, HeaderRight, HeaderMiddle, HeaderRow, HamburgerBar, HamburgerContainer } from './style';


const Header = () => {
  return (
    <HeaderContainer color = {'white'}>
      <HeaderRow>
        <HeaderLeft></HeaderLeft>
        <HeaderMiddle></HeaderMiddle>
        <HeaderRight>
          <Link to='/'><Button color='primary' size='lg' active>Register</Button></Link>{' '}
          <Link to='/login'><Button color='primary' size='lg' active>login</Button></Link>{' '}
          <Link to='/employee'><Button color='primary' size='lg' active>Employees</Button></Link>
          <Hamburger></Hamburger>
        </HeaderRight>
      </HeaderRow>
    </HeaderContainer>
    )
}

const Hamburger = () =>
 <HamburgerContainer>
   <HamburgerBar>
   </HamburgerBar>
   <HamburgerBar>
   </HamburgerBar>
   <HamburgerBar></HamburgerBar>
 </HamburgerContainer>

export default Header;
