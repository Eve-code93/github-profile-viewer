import React from 'react';

const ProfileOverview = ({ user, history }) => {
  if (!user) return null;

  return (
    <div className="profile-overview pb-5">
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt={user.login} width="150" height="150" />
      <p>Username: {user.login}</p>
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>
      {/*search history */}
      {history?.length > 0 && (
        <div className="mt-5">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Search History
            </div>
            <ul className="list-group list-group-flush">
              {history.map((u, i) => (
                <li className="list-group-item" key={i}>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileOverview;
