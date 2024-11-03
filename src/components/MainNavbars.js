import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import './MainNavbar.css';
import { MenuItems } from './MenuItems';
import logo from './logo.jpg';
import { DataAppContext } from './DataApp';

const MainNavbar = () => {
  const { appState, setAppState } = useContext(DataAppContext);
  const { username, loginStatus } = appState;
  
  const [clicked, setClicked] = useState(false);
  const [navigateToHome, setNavigateToHome] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = () => {
    setClicked(!clicked);
  };

  const logoutFn = () => {
    setAppState({ loginStatus: false, username: '' });
    setNavigateToHome(true);
  };

  if (navigateToHome) {
    return <Navigate to="/" />;
  }

  return (
    <nav className="NavbarItems">
      <div className="navbar-title-container">
        <img src={logo} alt="Logo" className="navbar-logo-image" />
        <h1 className="navbar-logo">Ray</h1>
      </div>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {clicked && (
          <li className="close-icon" onClick={handleClick}>
            <i className="fas fa-times"></i>
          </li>
        )}
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link 
              className={`${item.cName} ${currentPath === item.url ? 'active' : ''}`} 
              to={item.url} 
              onClick={handleClick} // Close menu on navigation
            >
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        {loginStatus ? (
          <li className="navbar__icon navbar__username">
            <span className="navbar__username-text">{username}</span>
            <div onClick={logoutFn} className="navbar__icon navbar__logout">
              <span className="logout-button">Logout</span>
            </div>
          </li>
        ) : (
          <li className="navbar__icon navbar__user">
            <Link to="/login" className="navbar__login" onClick={handleClick}>
              <span className="login-button">Login</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNavbar;
