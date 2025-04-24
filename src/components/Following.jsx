import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

const Following = ({ onError }) => {
  const { username } = useParams();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/following`);
        if (!response.ok) throw new Error('Failed to fetch following');
        const data = await response.json();
        setFollowing(data);
      } catch (err) {
        onError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, [username, onError]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{username}'s Following</h2>
        <Link to={`/users/${username}`} className="btn btn-outline-secondary">
          Back to Profile
        </Link>
      </div>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {following.map(user => (
          <div key={user.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <img 
                  src={user.avatar_url} 
                  alt={user.login} 
                  className="rounded-circle mb-3" 
                  width="80"
                />
                <h5 className="card-title">{user.login}</h5>
                <a 
                  href={user.html_url} 
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

Following.propTypes = {
  onError: PropTypes.func.isRequired,
};

export default Following;