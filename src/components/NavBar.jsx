import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav >
      <div >
        <Link  to="/">GitHub Viewer</Link>
        <div>
          <ul >
            <li >
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link  to="/profile">Profile</Link>
            </li>
            <li >
              <Link  to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
