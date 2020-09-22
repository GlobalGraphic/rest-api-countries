import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import Countries from "./components/Countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="App-heading">Where in the world ?</h1>
          <div className="dark_mode">
              <FontAwesomeIcon icon={faMoon} />
              <span className="dark_mode_text">Dark Mode</span>
          </div>
      </header>
      <SearchBar/>
      <Countries/>
    </div>
  );
}

export default App;
