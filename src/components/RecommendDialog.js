// RecommendDialog.js

import React from 'react';

// eslint-disable-next-line react/prop-types
function RecommendDialog({ text, onClick }) {
  return (
    <div
      onClick={() => onClick(text)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingInline: '6px',
        borderRadius: '12px',
        fontSize: '0.8rem',
        marginRight: '20px',
        backgroundColor: 'transparent',
        border: '1px solid #fff',
        cursor: 'pointer',
      }}
    >
      <p style={{ color: '#fff' }}>{text}</p>
    </div>
  );
}

export default RecommendDialog;
