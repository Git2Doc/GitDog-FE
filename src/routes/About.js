import React from 'react';
import Header from '../components/Header';
import YouTube from 'react-youtube';

function About() {
  return (
    <div
      style={{
        background: '#000000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Noto Sans',
      }}
    >
      <Header />
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
        Search Code Fast.
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        Analyzing GitHub Repo with <span style={{ opacity: 0.6 }}>GPT-4 </span>
        <br></br>
        and <span style={{ opacity: 0.6 }}>semantic</span> code search
        <br />
      </p>
      <div style={{ marginTop: '40px' }}>
        <YouTube
          videoId="4Aa0LZZ5kwY"
          opts={{
            width: '700',
            height: '400',
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          //이벤트 리스너
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </div>
    </div>
  );
}

export default About;
