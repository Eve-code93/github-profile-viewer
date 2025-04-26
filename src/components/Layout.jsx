import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      <header className="bg-black shadow-sm py-3">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              width="40"
              height="40"
              className="me-3"
            />
            <h2 className="mb-0 text-white">GitHub Profile Viewer</h2>
          </div>
          <NavBar />
        </div>
      </header>

     
      <main className="flex-grow-1 py-4">
        <div className="container" style={{ fontSize: '1.1rem' }}>
          {children}
        </div>
      </main>

      <footer className="bg-black py-1 shadow-sm"> 
        <div className="container text-center">
          <small className="text-white-50" style={{ fontSize: '0.75rem' }}> 
            &copy; {new Date().getFullYear()} GitHub Profile Viewer
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Layout;