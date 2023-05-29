import React, { useState } from 'react';
import logo from '../asset/img/gitdog.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Message from '../components/Message';
import RecommendDialog from '../components/RecommendDialog';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { prepareMessage, sendMessage } from '../components/MessageHandler';
function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const { repositoryName, repositoryId } = location.state;

  const initialMessages = [
    {
      isUser: false,
      text: `안녕하세요! ${repositoryName}에 대해서 질문을 던져보세요!`,
    },
  ];

  const recommendQuestions = [
    '이 레포지토리의 목적을 알려줘',
    '이 레포지토리의 주 사용 언어를 알려줘',
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingMessageId = prepareMessage(message, messages, setMessages);
    sendMessage(message, loadingMessageId, repositoryId, messages, setMessages);
    setMessage('');
  };

  const handleRecommendQuestionClick = (question) => {
    const loadingMessageId = prepareMessage(question, messages, setMessages);
    sendMessage(
      question,
      loadingMessageId,
      repositoryId,
      messages,
      setMessages,
    );
    setMessage('');
  };

  return (
    <div
      style={{
        background: '#222327',
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
      <div style={{ height: '95%', overflowY: 'scroll' }}>
        {messages.map((m, i) => (
          <Message key={i} isUser={m.isUser} text={m.text} />
        ))}
        {messages.length === 1 && (
          <div
            style={{
              display: 'flex',
              paddingLeft: '40px',
              marginTop: '15px',
              alignItems: 'center',
            }}
          >
            <RiQuestionnaireFill
              style={{
                color: '#fff',
                marginRight: '10px',
                fontSize: '1.5rem',
              }}
            />
            {recommendQuestions.map((question, i) => (
              <RecommendDialog
                key={i}
                text={question}
                onClick={handleRecommendQuestionClick} // Pass the function here
              />
            ))}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flex: 1,
              padding: '15px',
              borderRadius: '15px',
              fontSize: '1rem',
              marginRight: '10px',
            }}
            placeholder=" 질문을 입력하세요"
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '15px',
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
