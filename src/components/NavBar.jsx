import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: 'rgba(12, 8, 8, 0.9)' }}>
      <div className="container-fluid">
        {/* Navbar toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex align-items-center">
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `nav-link fw-semibold fs-5 px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className={({ isActive }) => 
                  `nav-link fw-semibold fs-5 px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* CSS Styles */}
      <style>{`
        .nav-link {
          color: #333;
          position: relative;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #4a8fe7;
          transform: translateY(-2px);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #4a8fe7;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 70%;
        }
        
        .nav-link.active {
          color: #4a8fe7;
          background-color: rgba(74, 143, 231, 0.1);
        }
        
        .navbar {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </nav>
  );
};

export default NavBar;