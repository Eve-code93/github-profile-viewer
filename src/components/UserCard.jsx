import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 text-center">
            <img 
              src={user.avatar_url} 
              alt={user.login} 
              className="rounded-circle img-fluid mb-3"
              style={{ width: '200px', height: '200px' }}
            />
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block mb-2"
            >
              View on GitHub
            </a>
          </div>
          <div className="col-md-9">
            <h2 className="mb-3">{user.name || user.login}</h2>
            <p className="text-muted h4 mb-3">@{user.login}</p>
            {user.bio && <p className="lead mb-4">{user.bio}</p>}
            
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  {user.company && (
                    <li className="mb-2">
                      <i className="bi bi-building me-2"></i>
                      {user.company}
                    </li>
                  )}
                  {user.location && (
                    <li className="mb-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      {user.location}
                    </li>
                  )}
                  {user.blog && (
                    <li className="mb-2">
                      <i className="bi bi-link-45deg me-2"></i>
                      <a href={user.blog} target="_blank" rel="noopener noreferrer">
                        {user.blog}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-calendar me-2"></i>
                    Joined {new Date(user.created_at).toLocaleDateString()}
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-people me-2"></i>
                    {user.followers} followers · {user.following} following
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-journal-bookmark me-2"></i>
                    {user.public_repos} public repositories
                  </li>
                  {user.twitter_username && (
                    <li className="mb-2">
                      <i className="bi bi-twitter me-2"></i>
                      <a 
                        href={`https://twitter.com/${user.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{user.twitter_username}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;