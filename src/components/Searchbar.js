import React from 'react';

function SearchBar({getSearchTerm}) {
  return (
    <input
      type="text"
      placeholder="Search transactions"
      onChange={getSearchTerm}
    />
  );
}

export default SearchBar;