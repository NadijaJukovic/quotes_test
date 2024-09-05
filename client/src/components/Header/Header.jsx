import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../context/AppContext";
import './Header.css';
const Header = () => {
  const { setLoggedInUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null); 
    localStorage.removeItem('accessToken');
    navigate('/'); 
  };

  return (
    <div className="header">
      <div className="name">
        <h1>Daily Quotes</h1>
      </div>
      <div className="logout-btn" onClick={handleLogout}>
        <h2>Log out</h2>
      </div>
    </div>
  );
};

export default Header;
