// Followers.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

const Followers = ({ onError }) => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/followers`);
        if (!response.ok) throw new Error('Failed to fetch followers');
        const data = await response.json();
        setFollowers(data);
      } catch (err) {
        onError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [username, onError]);

  if (loading) {
    return <div className="spinner-border text-primary" role="status" />;
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{username}'s Followers</h2>
        <Link to={`/users/${username}`} className="btn btn-outline-secondary">
          Back to Profile
        </Link>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {followers.map(follower => (
          <div key={follower.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <img 
                  src={follower.avatar_url} 
                  alt={follower.login} 
                  className="rounded-circle mb-3" 
                  width="80"
                />
                <h5 className="card-title">{follower.login}</h5>
                <a 
                  href={follower.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Followers.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default Followers;