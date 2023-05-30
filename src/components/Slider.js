import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Slider = ({ ids, urls }) => {
  const [slideStyle] = useState({
    height: '320px',
  });

  useEffect(() => {
    const swiperThemeColor = document.querySelector('.swiper-theme-color');
    if (swiperThemeColor) {
      swiperThemeColor.style.backgroundColor = 'red'; // 원하는 색상으로 변경합니다.
    }
  }, []);

  const IDs = [];
  const URLs = [];
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

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const buttonStyle = {
    width: '270px',
    height: '250px',
    fontSize: '16px',
    border: '1px solid #f7f7f2',
    borderRadius: '20px',
    marginTop: '20px',

    background: 'transparent',
    paddingBottom: '250px',
    paddingRight: '150px',
    fontWeight: 'bold',
    color: (index) => (hoveredIndex === index ? '#f7f7f2' : '#ebe8d5'),
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

  ids.forEach((id, index) => {
    IDs[index] = id;
    URLs[index] = urls[index];
  });

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ids.map((id, index) => (
        <SwiperSlide key={id} style={slideStyle}>
          <button
            onClick={() => handleSlideClick(index)}
            style={{
              ...buttonStyle,
              transform: buttonStyle.transform(index),
              color: buttonStyle.color(index),
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ paddingLeft: '5px' }}>
              <p style={textContainerStyle}>{IDs[index]}</p>
              <p style={textContainerStyle}>{URLs[index]}</p>
            </div>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};
