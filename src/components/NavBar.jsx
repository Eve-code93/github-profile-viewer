import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'; // Consider using styled-components for better CSS management

const NavBar = () => {
  return (
    <StyledNav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
       
       

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <NavItem>
              <StyledNavLink 
                to="/"
                end
              >
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink 
                to="/about"
              >
                About
              </StyledNavLink>
            </NavItem>
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};


const StyledNav = styled.nav`
  background-color: rgba(12, 8, 8, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
`;

const NavItem = styled.li`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #e0e0e0;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;
  display: inline-block;

  &:hover {
    color: #4a8fe7;
    transform: translateY(-2px);
    background-color: rgba(74, 143, 231, 0.1);
  }

  &::after {
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

  &:hover::after {
    width: 70%;
  }

  &.active {
    color: #4a8fe7;
    background-color: rgba(74, 143, 231, 0.2);
    font-weight: 600;

    &::after {
      width: 70%;
    }
  }
`;

export default NavBar;