import React from 'react';
import Header from '../components/Header';

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
        <video
          controls
          style={{ width: '80%', borderRadius: '10px' }}
          src="https://path-to-your-video.com/video.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default About;
