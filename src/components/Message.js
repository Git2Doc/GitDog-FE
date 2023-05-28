import React, { useState, useEffect } from 'react';
import logo from '../asset/img/gitdog_logo.png';
import MarkdownRenderer from './MarkdownRenderer';

// eslint-disable-next-line react/prop-types
const Message = ({ isUser, text = '', typingSpeed = 30 }) => {
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
        marginTop: '20px',
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
            width: '50px',
            height: '50px',
            marginRight: '10px',
          }}
        >
          User
        </div>
      ) : (
        <img
          src={logo}
          width="60"
          height="45"
          alt="Logo"
          style={{ marginRight: '10px', marginTop: '10px' }}
        />
      )}
      <div
        style={{
          backgroundColor: isUser ? '#131314' : '#222327',
          paddingTop: '15px',
          paddingBottom: '15px',
          paddingRight: '20px',
          paddingLeft: '20px',
          borderRadius: '20px',
          maxWidth: '60%',
          wordWrap: 'break-word',
        }}
      >
        <div>
          <MarkdownRenderer content={displayedText} />
        </div>
      </div>
    </div>
  );
};

export default Message;
