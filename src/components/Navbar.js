import React from 'react';
import './Navbar.css';
import Logo from '../assets/webx.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <div>
        <img style={{ width: '60px', height: 'auto' }} src={Logo} alt="WebX"/>
      </div>
      <div className='nav-text'>
        <h1>Realtime Crypto Tracker</h1>
      </div>
    </div>
  )
}

export default Navbar