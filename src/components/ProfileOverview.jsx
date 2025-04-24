import React from 'react';

const ProfileOverview = ({ user }) => {
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
    </div>
  );
};

export default ProfileOverview;
