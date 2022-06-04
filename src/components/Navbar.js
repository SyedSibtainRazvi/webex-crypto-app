import React from 'react';
import './Navbar.css';
import Logo from '../assets/webx.png';

const Navbar = () => {
  return (
    <>
      <div className='nav'>
        <img style={{ width: '80px', height: 'auto' }} src={Logo} alt="WebX"></img>
      <div className='nav-text'>
        <h1>Realtime Crypto Tracker</h1>
      </div>
      </div>
    </>
  )
}

export default Navbar