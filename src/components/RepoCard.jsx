import React from 'react';
import PropTypes from 'prop-types';

const RepoCard = ({ repos, className, style }) => {
  if (!repos || repos.length === 0) {
    return <div>No repositories found.</div>;
  }

  return (
    <div className={className} style={style}>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Prop validation
RepoCard.propTypes = {
  repos: PropTypes.array.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

RepoCard.defaultProps = {
  className: '',
  style: {},
};

export default RepoCard;
