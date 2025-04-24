import React from 'react';

function Followers({ users }) {
  console.log("Followers component loaded:", users);

  if (!users || users.length === 0) {
    return <p className="text-center mt-4">No followers to display.</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Followers</h2>
      <div className="row">
        {users.map(user => (
          <div className="col-md-4 mb-3" key={user.id}>
            <div className="card h-100">
              <img src={user.avatar_url} className="card-img-top" alt={user.login} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{user.login}</h5>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-auto">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Followers;
