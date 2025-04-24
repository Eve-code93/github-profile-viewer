import React from 'react';

const Following = ({ users }) => {
  // Handle the case where there are no following users
  if (!users || users.length === 0) {
    return <p>No following users found.</p>;
  }

  // Render the list of users being followed
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Following</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex align-items-center">
            {/* Profile image */}
            <img
              src={user.avatar_url}
              alt={user.login}
              className="rounded-circle me-3"
              width="48"
              height="48"
            />
            {/* GitHub profile link */}
            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary fw-bold"
            >
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Following;
