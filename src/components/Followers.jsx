import React from 'react';

const Followers = ({ users }) => {
  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
