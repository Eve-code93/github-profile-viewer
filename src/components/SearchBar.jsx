import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchHistory from './SearchHistory';

const SearchBar = ({ history = [], onAddToHistory }) => {
  const [query, setQuery] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onAddToHistory(query.trim());
      navigate(`/users/${query}`);
      setQuery('');
      setShowHistory(false);
    }
  };

  const handleHistorySelect = (username) => {
    setQuery(username);
    navigate(`/users/${username}`);
    setShowHistory(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowHistory(true)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>

      {showHistory && (
        <SearchHistory 
          history={history} 
          onSelect={handleHistorySelect} 
        />
      )}
    </div>
  );
};

export default SearchBar;