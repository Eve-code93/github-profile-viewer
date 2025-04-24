import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    
    await onSearch(searchInput);
    navigate('/profile');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mt-4 mb-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="form-control w-50 me-2"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Show Profile
      </button>
    </form>
  );
};

export default SearchBar;
