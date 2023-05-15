import React, { useState } from 'react';
import logo from '../asset/img/gitdog.png';
import { useNavigate } from 'react-router-dom';
function Main() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSearch = async () => {
    navigate('/result', {
      state: {
        repoUrl: repoUrl,
      },
    });
  };

  const handleInputChange = (event) => {
    setRepoUrl(event.target.value);
  };

  return (
    <div
      style={{
        // Add relative positioning
        background: 'linear-gradient(to bottom, #2c3e50, #000000)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
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
          <a
            href="#"
            style={{
              color: '#fff',
              padding: '10px',
              textDecoration: 'none',
              marginRight: '10px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'color 0.2s ease-in-out',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </a>
          <a
            href="#"
            style={{
              color: '#fff',
              padding: '10px',
              textDecoration: 'none',
              marginRight: '10px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'color 0.2s ease-in-out',
            }}
          >
            About
          </a>
          <a
            href="#"
            style={{
              color: '#fff',
              padding: '10px',
              textDecoration: 'none',
              marginRight: '10px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'color 0.2s ease-in-out',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </a>
        </nav>
      </header>
      <div style={{ height: '15px' }} />
      <h1
        style={{
          fontSize: '4.5rem',
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '2px 2px #333',
        }}
      >
        GitDog .
      </h1>
      <div
        style={{
          width: '70%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <input
          type="text"
          style={{
            padding: '10px',
            borderRadius: '5px',
            fontSize: '1.2rem',
            width: '60%',
            marginRight: '10px',
          }}
          placeholder="ex) https://github.com/kildog/repo1"
          value={repoUrl}
          onChange={handleInputChange}
        />
        <button
          style={{
            backgroundColor: isHovering ? '#fff' : 'transparent',
            color: isHovering ? '#000' : '#fff',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '1.3rem',
            border: '2px solid #fff',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Main;
