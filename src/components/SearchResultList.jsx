import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultList.css";

const SearchResultList = ({ results }) => {
  return (
    <div className="search-result-list">
      {results.map((result, index) => (
        <SearchResult result={result} key={index} />
      ))}
    </div>
  );
};

export default SearchResultList;
