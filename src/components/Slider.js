import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Slider = ({ ids, urls }) => {
  const [slideStyle] = useState({
    height: '300px',
  });

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
    width: '250px',
    height: '250px',
    fontSize: '16px',
    borderRadius: '23px',
    marginTop: '20px',
    marginLeft: '36px',
    background: 'rgba(128, 128, 128, 0)',
    paddingBottom: '250px',
    paddingRight: '150px',
    fontWeight: 'bold',
    color: (index) => (hoveredIndex === index ? '#EBE38C' : '#C1BFAE'),
    transform: (index) => (hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'),
    border: (index) =>
      hoveredIndex === index ? '2px solid #EBE38C' : '2px solid #C1BFAE',
  };

  const textContainerStyle = {
    width: '150px',
    marginTop: '40px',
    marginLeft: '30px',
    position: 'relative',
    wordWrap: 'break-word',
  };

  // ids와 urls를 기반으로 IDs와 URLs 배열에 정보를 할당
  ids.forEach((id, index) => {
    IDs[index] = id;
    URLs[index] = urls[index];
  });

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
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
