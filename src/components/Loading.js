import React from 'react';

// eslint-disable-next-line react/prop-types
const Loading = ({ text }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.2rem',
            color: '#fff',
            marginBottom: '10px',
          }}
        >
          {text}
        </div>
        <div
          style={{
            width: '40px',
            height: '40px',
            border: '5px solid #fff',
            borderRadius: '50%',
            animation: 'loading 1.5s infinite ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
