import React, { useState, useEffect } from 'react';
import logo from '../asset/img/gitdog.png';

// eslint-disable-next-line react/prop-types
const Message = ({ isUser, text = '', typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentText = '';
    if (!isUser) {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          currentText = currentText + text.charAt(i);
          setDisplayedText(currentText);
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, typingSpeed);
      return () => clearInterval(typingEffect); // cleanup function
    } else {
      setDisplayedText(text);
    }
  }, [text, isUser, typingSpeed]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        margin: '10px',
      }}
    >
      {isUser ? (
        <div
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '30px',
            height: '30px',
            marginRight: '10px',
          }}
        >
          U
        </div>
      ) : (
        <img
          src={logo}
          width="30"
          height="30"
          alt="Logo"
          style={{ marginRight: '10px' }}
        />
      )}
      <div
        style={{
          backgroundColor: isUser ? '#eeeeee' : '#ddd',
          padding: '10px',
          borderRadius: '5px',
          maxWidth: '70%',
          wordWrap: 'break-word',
        }}
      >
        <p>{displayedText}</p>
      </div>
    </div>
  );
};

export default Message;
