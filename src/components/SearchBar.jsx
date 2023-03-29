import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  useEffect(() => {
    fetchData(input);
  }, [input]);

  return (
    <div className="search-bar">
      <FaSearch id="search-icon" />
      <input
        className="input"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
