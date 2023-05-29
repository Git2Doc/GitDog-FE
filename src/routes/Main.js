import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { Slider } from '../components/Slider';

function Main() {
  const [repoUrl, setRepoUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [ids, setIds] = useState([]); // ID 배열 상태 추가
  const [urls, setUrls] = useState([]); // URL 배열 상태 추가

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log('Mouse entered the button');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log('Mouse left the button');
  };

  const fetchData = async () => {
    setIsLoading(true);
    setLoadingText('Fetching Repositories...');

    try {
      const response = await fetch('https://api.gitdog.site/repository/list');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (
        data.data &&
        data.data.repositories &&
        Array.isArray(data.data.repositories)
      ) {
        const repositories = data.data.repositories;
        const ids = repositories.map((repo) => repo.id);
        const urls = repositories.map((repo) => repo.url);
        setIds(ids); // ID 배열 상태 업데이트
        setUrls(urls); // URL 배열 상태 업데이트
        console.log('IDs:', ids);
        console.log('URLs:', urls);
      } else {
        console.log('No repositories found');
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching repositories:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // 컴포넌트가 마운트될 때 한 번만 데이터를 가져옴

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
        position: 'relative',
      }}
    >
      <Header />
      {isLoading && <Loading text={loadingText} />}
      <div style={{ height: '15px' }} />
      <h1
        style={{
          fontSize: '4.5rem',
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '2px 2px #333',
          position: 'relative',
          top: '-40px',
        }}
      >
        GitDog .
      </h1>
      <div
        style={{
          width: '950px',
          position: 'relative',
          top: '30px',
        }}
      >
        <Slider ids={ids} urls={urls} />{' '}
        {/* ID 배열과 URL 배열을 Slider 컴포넌트에 전달 */}
      </div>
      <div
        style={{
          width: '70%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          top: '-17px',
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
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Main;
