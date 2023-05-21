import React from 'react';
import Header from '../components/Header';

function Contact() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '-1',
      }}
    >
      <Header />
      <div>
        <h1 style={{ fontSize: '6rem', color: 'white' }}>Contact</h1>
      </div>
      <div>
        <h1 style={{ fontSize: '1.5rem', color: 'white' }}>
          명지대학교 캡스톤 디자인
        </h1>
      </div>
    </div>
  );
}

export default Contact;
