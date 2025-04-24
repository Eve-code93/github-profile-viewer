import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';
import UserCard from './UserCard';

const ProfileOverview = ({ onError }) => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setLocalError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setLocalError(null);
        
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          throw new Error(
            response.status === 404 
              ? 'User not found' 
              : response.status === 403 
                ? 'API rate limit exceeded' 
                : 'Failed to fetch user data'
          );
        }
        
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setLocalError(err.message);
        onError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username, onError]);

  if (error?.includes('API rate limit exceeded')) {
    return (
      <div className="alert alert-warning">
        GitHub API rate limit exceeded. Please try again later or 
        <a href="https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting" 
           target="_blank" 
           rel="noopener noreferrer"
           className="alert-link ms-1">
          learn more
        </a>.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="ms-2">Loading profile...</span>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="alert alert-warning">
        No user data available for @{username}
      </div>
    );
  }

  return (
    <div className="mt-4">
      <UserCard user={userData} />
      
      <div className="card mt-4">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === `/users/${username}` ? 'active' : ''}`}
                to={`/users/${username}`}
              >
                <i className="bi bi-house-door"></i> Overview
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname.includes('repos') ? 'active' : ''}`}
                to={`/users/${username}/repos`}
              >
                <i className="bi bi-journal-code"></i> Repositories ({userData.public_repos})
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname.includes('followers') ? 'active' : ''}`}
                to={`/users/${username}/followers`}
              >
                <i className="bi bi-people"></i> Followers ({userData.followers})
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname.includes('following') ? 'active' : ''}`}
                to={`/users/${username}/following`}
              >
                <i className="bi bi-person-plus"></i> Following ({userData.following})
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <Outlet context={{ user: userData }} />
        </div>
      </div>
    </div>
  );
};

ProfileOverview.propTypes = {
  onError: PropTypes.func
};

ProfileOverview.defaultProps = {
  onError: () => {}
};

export default ProfileOverview;