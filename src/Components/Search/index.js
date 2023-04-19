import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
const Search = (props) => {
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState(false);
  const [news, setNews] = useState("");

  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${inputText}`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, [inputText]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  }; 

  const handleSearchResult = () => {
   inputText && "Enter" ? setSearch(true) : setSearch(false) 
   setInputText("")
  };
  console.log(inputText);
  console.log(news);
  console.log(search);
  return (
    <div>

      {
        search ===false ? 
        <div>
      <div className="searchbar">
        <div className="searchbar-wrapper">
          <div className="searchbar-left">
            <div className="search-icon-wrapper">
              <span className="search-icon searchbar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </span>
            </div>
          </div>

          <div className="searchbar-center">
            <div className="searchbar-input-spacer"></div>

            <input
              type="text"
              className="searchbar-input"
              maxLength="2048"
              name="q"
              autoCapitalize="off"
              autoComplete="off"
              title="Search"
              role="combobox"
              placeholder="Search News"
              onChange={(e) => handleChange(e)}
              value={inputText}
            />
          </div>

          <div className="searchbar-right">
            <svg
              className="voice-search"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285f4"
                d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              ></path>
              <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
              <path
                fill="#fbbc05"
                d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              ></path>
              <path
                fill="#ea4335"
                d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
        <button onClick={handleSearchResult}>Search News</button>
        </div>
      : 
      <div>
      <div className="searchbar">
        <div className="searchbar-wrapper">
          <div className="searchbar-left">
            <div className="search-icon-wrapper">
              <span className="search-icon searchbar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </span>
            </div>
          </div>

          <div className="searchbar-center">
            <div className="searchbar-input-spacer"></div>

            <input
              type="text"
              className="searchbar-input"
              maxLength="2048"
              name="q"
              autoCapitalize="off"
              autoComplete="off"
              title="Search"
              role="combobox"
              placeholder="Search News"
              onChange={(e) => handleChange(e)}
              value={inputText}
            />
          </div>

          <div className="searchbar-right">
            <svg
              className="voice-search"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285f4"
                d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
              ></path>
              <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
              <path
                fill="#fbbc05"
                d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
              ></path>
              <path
                fill="#ea4335"
                d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
        <button onClick={handleSearchResult}>Search News</button>
      <div className="reasult">
        <div>
          {news === "" ? (
            <div className="loader">
              <div class="loadingio-spinner-spinner-977el9wwy2v">
                <div class="ldio-4j5ay0xf86g">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="news-lists">
              {news.hits.map((e, i) => {
                return (
                  <div key={i}>
                    <li className="list">
                      <div>
                        <h1>{e.title}</h1>
                        <a href={e.url}>{e.url}</a>
                      </div>
                      <div className="flex date">
                        <h3>Created At: {e.created_at.split('').slice(0, 10).join('')}</h3>
                        <span>Author Name: {e.author}</span>
                      </div>
                      <hr/>
                    </li>
                  </div>
                );
              })}
            </div>
          )}
        </div>
       </div>
      </div>
  }
    </div>
  );
};

export default Search;
