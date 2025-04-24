import React from 'react';
import PropTypes from 'prop-types';

const SearchHistory = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-3">
      <div className="card shadow-sm">
        <div className="card-header bg-light">
          <h6 className="mb-0">
            <i className="bi bi-clock-history me-2"></i>
            Recent Searches
          </h6>
        </div>
        <div className="list-group list-group-flush">
          {history.map((user, index) => (
            <button
              key={index}
              type="button"
              className="list-group-item list-group-item-action d-flex align-items-center"
              onClick={() => onSelect(user)}
            >
              <i className="bi bi-person-circle me-2"></i>
              <span className="text-truncate">{user}</span>
              <span className="ms-auto badge bg-secondary rounded-pill">
                #{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchHistory;