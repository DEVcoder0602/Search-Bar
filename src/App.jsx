import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";

function App() {
  const [results, setResults] = useState([]);
  // console.log("Got from child : ", results);

  return (
    <div className="app">
      <div className="container">
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} />
      </div>
    </div>
  );
}

export default App;
