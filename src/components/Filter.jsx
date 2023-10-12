import React, { useState } from 'react';

const Filter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default Filter;