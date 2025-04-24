import React from 'react';

const ProfileOverview = ({ user }) => {
  return (
    <div>
      <h2>Profile Overview</h2>
      {user && <p>{user.login}</p>}
    </div>
  );
};

export default ProfileOverview;
