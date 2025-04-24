import React from 'react';
import PropTypes from 'prop-types';

const SearchHistory = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Search History</h5>
        </div>
        <ul className="list-group list-group-flush">
          {history.map((user, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              style={{
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onClick={() => onSelect(user)}
              onMouseOver={(e) => e.currentTarget.classList.add('bg-light')}
              onMouseOut={(e) => e.currentTarget.classList.remove('bg-light')}
            >
              <i className="bi bi-person-circle me-2"></i> {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

SearchHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchHistory;
