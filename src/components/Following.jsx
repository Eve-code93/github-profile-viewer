import React from 'react';
import PropTypes from 'prop-types';

const Following = ({ users, className, style }) => {
  if (!users || users.length === 0) {
    return <div>No following users found.</div>;
  }

  return (
    <div className={className} style={style}>
      <h2>Following</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

// Prop validation
Following.propTypes = {
  users: PropTypes.array.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Following.defaultProps = {
  className: '',
  style: {},
};

export default Following;
