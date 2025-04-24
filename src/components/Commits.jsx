import React from 'react';

const Commits = ({ commits }) => {
  return (
    <div>
      <h2>Recent Commits</h2>
      <ul>git 
        {commits && commits.length > 0 ? (
          commits.map((commit, index) => (
            <li key={index}>
              <strong>{commit.commit?.author?.name}</strong>: {commit.commit?.message}
            </li>
          ))
        ) : (
          <p>No commits found.</p>
        )}
      </ul>
    </div>
  );
};

export default Commits;
