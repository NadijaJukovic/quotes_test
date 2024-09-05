import "./Home.css";
import Birdpic from '../../assets/images-quotes.png';

import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div className="title">
        <h1>Daily Quotes</h1>
      </div>
      <div className="pic1">
        <img 
          src={Birdpic}  
          alt="Description of image" 
          style={{ width: '100%', height: '100 ' }} 
        />
      </div>
      <div className="main-home">
        <h2>Speacially selected daily quotes for your inspiration and mood</h2>
      </div>
      <a href="/login">
      <div className="button-home">
        <h1>Get started</h1>
      </div>
      </a>
    </div>
  );
};

export default Home;

