import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import data from "./data";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="App">
        <Link className="link" to="slider">
          Slider
        </Link>
        <header className="App-header">
          <input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
          />
          {data
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
              return "";
            })
            .map((val) => {
              return (
                <div key={val.id}>
                  <p>
                    {`(${val.id})`} &nbsp; {val.name}
                  </p>
                </div>
              );
            })}
        </header>
      </div>
    </>
  );
};

export default Search;
