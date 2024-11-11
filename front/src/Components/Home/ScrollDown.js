import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Import the arrow icon from react-icons

const ScrollDown = () => {
  return (
    <div className='home-Scroll'>
      <a href='#contact' className='home_scroll_button'>
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.5',
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: '20px',
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: 'none',
              stroke: '#000',
              strokeWidth: '20px',
            }}
          />
        </svg>
      Scroll Down          <FaArrowDown size={30} /> {/* Display the arrow icon */}
       


      </a>
    </div>
  );
}

export default ScrollDown;
