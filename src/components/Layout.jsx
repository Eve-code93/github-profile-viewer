import React from 'react';

/**
 * Layout component serves as the overall wrapper for pages.
 * It includes a header with logo and title, a main content area, and a footer.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-vh-100 bg-light d-flex flex-column">
      {/* Header with GitHub logo */}
      <header className="bg-white shadow-sm py-3">
        <div className="container d-flex justify-content-center align-items-center">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            width="40"
            height="40"
          />
          <h1 className="ms-3 mb-0">GitHub Profile Viewer</h1>
        </div>
      </header>

      {/* Main content area */}
      <main className="container my-4 flex-grow-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white text-center py-3 shadow-sm">
        <small className="text-muted">&copy; {new Date().getFullYear()} GitHub Profile Viewer</small>
      </footer>
    </div>
  );
};

export default Layout;
