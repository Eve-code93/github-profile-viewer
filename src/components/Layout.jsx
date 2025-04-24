import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-black shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center py-2">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              width="32"
              height="32"
              className="me-2"
            />
            <h1 className="h5 mb-0">GitHub Profile Viewer</h1>
          </div>
          <NavBar />
        </div>
      </header>

      <main className="flex-grow-1 py-3">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="bg-black py-2 shadow-sm">
        <div className="container text-center">
          <small className="text-muted">
            &copy; {new Date().getFullYear()} GitHub Profile Viewer
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Layout;