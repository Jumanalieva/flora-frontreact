// SearchBar.tsx (or wherever your SearchBar component is located)
import React, { useState } from 'react';

type SearchBarProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        id="plantSearch"
        name="plantSearch"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2.5 border rounded-l-md w-full focus:outline-none"
      />
      <button type="submit" className="bg-green-700 text-white p-3 rounded-r-md">
        send
      </button>
    </form>
  );
};

export default SearchBar;

