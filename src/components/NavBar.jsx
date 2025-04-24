import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="text-center mt-2">
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;
