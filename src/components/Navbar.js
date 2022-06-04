import React from 'react';
import './Navbar.css';
import Logo from '../assets/webx.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <div>
        <img style={{ width: '60px', height: 'auto' }} src={Logo} alt="WebX"/>
      </div>
      <div>
        <h1 id='nav-text'>Realtime Crypto Tracker</h1>
      </div>
    </div>
  )
}

export default Navbar