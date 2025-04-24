import React from 'react';
import PropTypes from 'prop-types';

const ProfileOverview = ({ user, history, className, style }) => {
  if (!user) return <div>No user data available.</div>;

  return (
    <div className={`profile-overview ${className}`} style={style}>
      <h2>{user.name || 'No name provided'}</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="150"
        height="150"
        style={{ borderRadius: '50%' }}
      />
      <p>Username: {user.login}</p>
      <p>Bio: {user.bio || 'No bio available'}</p>
      <p>Location: {user.location || 'Location not available'}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>

      {/* Search History */}
      {history?.length > 0 && (
        <div className="mt-4">
          <h5>Search History</h5>
          <ul className="list-unstyled">
            {history.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Prop validation
ProfileOverview.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    location: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
};

ProfileOverview.defaultProps = {
  history: [],
  className: '',
  style: {},
};

export default ProfileOverview;
