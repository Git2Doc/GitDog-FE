import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../asset/img/gitdog.png';

function Header() {
  const linkStyle = {
    color: '#fff',
    padding: '10px',
    textDecoration: 'none',
    marginRight: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'color 0.2s ease-in-out',
  };

  const activeStyle = {
    color: '#fff',
  };

  return (
    <header
      style={{
        width: '100%',
        height: '80px',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <img
          src={logo}
          width="100"
          height="80"
          alt="Logo"
          style={{ marginRight: 'px' }}
        />
        <h2 style={{ color: '#fff', margin: 0 }}>GitDog</h2>
      </div>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingRight: '20px',
        }}
      >
        <NavLink to="/" style={linkStyle} activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle} activeStyle={activeStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={linkStyle} activeStyle={activeStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
