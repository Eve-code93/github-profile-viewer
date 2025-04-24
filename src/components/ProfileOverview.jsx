import React from 'react';
import PropTypes from 'prop-types';

const ProfileOverview = ({ user, history }) => {
  if (!user) return <div>No user data available.</div>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          
          {/* Left Column: Profile Info */}
          <div className="col-md-7 p-4 border-end">
            <div className="text-center text-md-start">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="rounded-circle border border-primary mb-3"
                width="120"
                height="120"
              />
              <h3>{user.name || 'No name provided'}</h3>
              <p className="text-muted">@{user.login}</p>
              <p><strong>Joined At:</strong> <u>{new Date(user.created_at).toDateString()}</u></p>
              <p><strong>📍 Location:</strong> {user.location || 'Not available'}</p>
              <p><strong>🏢 Company:</strong> {user.company || 'N/A'}</p>
              <p><strong>🕒 Last Updated:</strong> {new Date(user.updated_at).toLocaleString()}</p>

              <a
                href={user.html_url}
                className="btn btn-outline-primary mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Column: Stats & History */}
          <div className="col-md-5 p-4">
            <h5 className="mb-4">Connections</h5>

            <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
              <StatCard label="Public Repos" value={user.public_repos} color="warning" />
              <StatCard label="Followers" value={user.followers} color="success" />
              <StatCard label="Following" value={user.following} color="danger" />
              <StatCard label="Public Gists" value={user.public_gists || 0} color="info" />
            </div>

            {history?.length > 0 && (
              <div className="mt-4">
                <h6 className="fw-bold">Search History</h6>
                <ul className="list-group">
                  {history.map((name, i) => (
                    <li className="list-group-item d-flex align-items-center" key={i}>
                      <img
                        src={`https://github.com/${name}.png`}
                        alt={name}
                        className="rounded-circle me-2"
                        width="32"
                        height="32"
                      />
                      @{name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

// Bootstrap Stat Card
const StatCard = ({ label, value, color }) => (
  <div className={`text-center bg-${color} text-white rounded p-2`} style={{ minWidth: '100px' }}>
    <div className="fw-bold">{value}</div>
    <small>{label}</small>
  </div>
);

// PropTypes
ProfileOverview.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    location: PropTypes.string,
    company: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
    public_gists: PropTypes.number,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  history: PropTypes.array,
};

ProfileOverview.defaultProps = {
  history: [],
};

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired,
};

export default ProfileOverview;

 