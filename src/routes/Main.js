import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';

function Main() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getRepoName = (url) => url.split('/').pop().replace('.git', '');

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      let response = await fetch('http://13.124.113.68/repository', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: repoUrl,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonResponse = await response.json();
      const repositoryId = jsonResponse.data.id;
      console.log(repositoryId);
      response = await fetch(
        `http://13.124.113.68/repository/${repositoryId}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsLoading(false);

      navigate('/result', {
        state: {
          repositoryId,
          repositoryName: getRepoName(repoUrl),
        },
      });
    } catch (error) {
      setIsLoading(false);
      console.error(
        'There has been a problem with your fetch operation:',
        error,
      );
    }
  };

  const handleInputChange = (event) => {
    setRepoUrl(event.target.value);
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #2c3e50, #000000)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative', // Add relative positioning
      }}
    >
      <Header />
      {isLoading && <Loading />}{' '}
      {/* Display the Loading component when isLoading is true */}
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
          placeholder="ex) https://github.com/repo1"
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
