import React, { useState } from 'react';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Main() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnterSlide = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeaveSlide = () => {
    setHoveredIndex(null);
  };

  const slideStyle = {
    height: '320px',
  };
  const buttonStyle = {
    width: '270px',
    height: '20px',
    border: '1px solid #f7f7f2',
    borderRadius: '20px',
    marginTop: '20px',
    left: '-20px',
    background: 'transparent',
    paddingBottom: '250px',
    paddingRight: '150px',

    color: (index) => (hoveredIndex === index ? '#f7f7f2' : '#fff'),
    transform: (index) => (hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'),
  };

  const textContainerStyle = {
    width: '210px',
    marginTop: '40px',
    marginLeft: '20px',
    position: 'absolute',
    wordWrap: 'break-word',
    textAlign: 'left',
  };

  // 하드코딩된 데이터
  const titles = [
    'Algorithm ',
    '2022-nae-pyeon ',
    'subwayProject_ ',
    'TeamProject1 ',
    'SimpleDiary',
  ];
  const ids = [
    'By BEMELON',
    'By sungxsoo',
    'By cxxerry',
    'By Yeeun210',
    'By piedroconti',
  ];
  const urls = [
    'https://github.com/BEMELON',
    'https://github.com/sungxsoo',
    'https://github.com/cxxerry',
    'https://github.com/Yeeun210',
    'https://github.com/piedroconti',
  ];
  const navigate = useNavigate();

  const handleSlideClick = (slideIndex) => {
    console.log('Selected slide:', slideIndex);
    const repositoryName = ids[slideIndex];
    navigate('/result', {
      state: {
        repositoryName,
      },
    });
  };

  const [repoUrl, setRepoUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log('Mouse entered the button');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log('Mouse left the button');
  };

  const handleInputChange = (event) => {
    setRepoUrl(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search:', repoUrl);
    // 검색 로직 구현
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
      <h1
        style={{
          fontSize: '4.5rem',
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '2px 2px #333',
          position: 'relative',
        }}
      >
        GitDog.
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={3}
          navigation={{ position: 'relative', color: 'gray' }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            position: 'relative',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginTop: '20px',
            marginBottom: '20px',
            top: '0px',
            width: '920px',
            height: '300px',
            justifyContent: 'center',
          }}
        >
          {ids.map((id, index) => (
            <SwiperSlide key={id} style={slideStyle}>
              <button
                onClick={() => handleSlideClick(index)}
                style={{
                  ...buttonStyle,
                  transform: buttonStyle.transform(index),
                  color: buttonStyle.color(index),
                  position: 'relative',
                  left: '14px', // 수정된 부분
                }}
                onMouseEnter={() => handleMouseEnterSlide(index)}
                onMouseLeave={handleMouseLeaveSlide}
              >
                <div style={{ paddingLeft: '5px' }}>
                  <p style={{ ...textContainerStyle, fontSize: '25px' }}>
                    {titles[index]}
                  </p>
                  <p
                    style={{
                      ...textContainerStyle,
                      top: '50px',
                      fontSize: '13px',
                    }}
                  >
                    {id}
                  </p>
                  <p
                    style={{
                      ...textContainerStyle,
                      top: '165px',
                      fontSize: '12px',
                    }}
                  >
                    {urls[index]}
                  </p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
