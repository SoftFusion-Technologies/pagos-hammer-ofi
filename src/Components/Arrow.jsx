import React from 'react';
import '../styles/BackButton.css'; 

const BackButton = () => {

  return (
    <a href="/" className='link'>
    <button className="back-button">
      <svg
        className="back-button-icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <p className='btn'>Volver</p>
    </button>
    </a>
  );
};

export default BackButton;