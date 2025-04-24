import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          About GitHub Profile Viewer
        </div>
        <div className="card-body">
          <h5 className="card-title">Welcome to GitHub Profile Viewer</h5>
          <p className="card-text">
            This application allows you to search for any GitHub user by their username and view their profile information.
            You'll be able to see their repositories, followers, following, and more, all in a clean and easy-to-use interface.
          </p>
          <p className="card-text">
            Simply enter a GitHub username into the search bar, and the application will fetch the user's data from the GitHub API.
            The search history is also saved, allowing you to quickly access profiles you've searched for in the past.
          </p>

          <h6>Technologies Used</h6>
          <ul className="list-unstyled">
            <li><i className="bi bi-lightning-charge-fill me-2 text-warning"></i>React for the front-end</li>
            <li><i className="bi bi-brush-fill me-2 text-primary"></i>Bootstrap for styling</li>
            <li><i className="bi bi-cloud-arrow-down-fill me-2 text-info"></i>GitHub API to fetch user data</li>
            <li><i className="bi bi-diagram-3-fill me-2 text-success"></i>React Router for navigation</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default About;
