import React from 'react';
import text from '../asset/img/gitdog_text.png';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
// eslint-disable-next-line react/prop-types
function Footer() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#131315',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          display: 'flex',
          padding: '50px',

          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={text}
          width="140"
          height="48"
          alt="Logo"
          style={{
            marginLeft: '40px',
          }}
        />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              marginRight: '50px',
            }}
          >
            <a
              href="mailto:gitdog0901@gmail.com"
              style={{
                fontWeight: 'bold',
                color: '#5E5E67',
                marginRight: '10px',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <EmailIcon
                style={{ marginRight: '20px' }}
                sx={{ color: '#5E5E67' }}
                fontSize="large"
              />
              Email
            </a>
          </div>
          <div
            style={{
              marginRight: '20px',
            }}
          >
            <a
              href="https://github.com/Git2Doc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: 'bold',
                color: '#5E5E67',
                marginRight: '10px',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <GitHubIcon
                style={{ marginRight: '20px' }}
                sx={{ color: '#5E5E67' }}
                fontSize="large"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
