import React from 'react';

const Following = ({ users }) => {
  return (
    <div>
      <h2>Following</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default Following;
