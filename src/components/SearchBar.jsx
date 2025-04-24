import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
