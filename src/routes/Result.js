import React, { useState } from 'react';
import logo from '../asset/img/gitdog.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Message from '../components/Message';
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/prop-types

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const { repositoryName, repositoryId } = location.state;

  // Modify the initial message with repositoryName
  const [messages, setMessages] = useState([
    {
      isUser: false,
      text: `안녕하세요! ${repositoryName}에 대해서 질문을 던져보세요!`,
    },
  ]);

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      return; // Skip empty messages
    }

    const newMessageId = uuidv4(); // generate a unique ID for the new message

    const newMessage = { id: newMessageId, isUser: true, text: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Add a loading message
    const loadingMessageId = uuidv4(); // generate a unique ID for the loading message
    const loadingMessage = {
      id: loadingMessageId,
      isUser: false,
      text: '대답 생성 중...',
    };
    setMessages((prevMessages) => [...prevMessages, loadingMessage]);

    setMessage('');

    // POST request to the chat API
    try {
      let response = await fetch(
        `http://13.124.113.68/repository/${repositoryId}/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat: message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonResponse = await response.json();

      // Simulate system response with API response
      const systemResponse = {
        id: loadingMessageId, // use the same ID to replace the loading message
        isUser: false,
        text: jsonResponse.data.answer,
      };

      // Replace the loading message with the actual response
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === loadingMessageId ? systemResponse : message,
        ),
      );
    } catch (error) {
      console.error(
        'There has been a problem with your fetch operation:',
        error,
      );
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #2c3e50, #000000)',
        height: '100vh',
        padding: '80px 20px',
        boxSizing: 'border-box',
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
            style={{ marginRight: '20px' }}
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
            onClick={() => navigate('/')}
          >
            Home
          </a>
        </nav>
      </header>
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        {messages.map((m, i) => (
          <Message key={i} isUser={m.isUser} text={m.text} />
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '5px',
              fontSize: '1.2rem',
              marginRight: '10px',
            }}
            placeholder="Ask something..."
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '1.3rem',
              border: '2px solid #fff',
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Result;
