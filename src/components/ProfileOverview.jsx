import React from 'react';

const ProfileOverview = ({ user, history }) => {
  if (!user) return null;

  return (
    <div className="profile-overview">
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
        <div className="mt-4">
          <h5>Search History</h5>
          <ul>
            {history.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileOverview;
