import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import PoperMovieSearch from "./PoperMovieSearch";
import useDebounce from "../hooks/useDebounce";

const Search = ({ size, focus }) => {
  const inputRef = useRef();

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const debounced = useDebounce(searchValue, 500);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult();
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setSearchResult([1, 2, 3]);
      setLoading(false);
      setShowResult(true);
    }, 1000);
  }, [debounced]);

  return (
    <Tippy
      interactive
      onClickOutside={() => setShowResult(false)}
      visible={showResult && searchValue.length > 0}
      render={(attrs) => (
        <div
          className="overflow-y-overlay max-h-[350px] min-h-[100px] rounded-lg bg-banner px-2 pt-2 text-white"
          style={{ width: size === "100%" ? "calc(100dvw - 80px)" : size }}
          tabIndex="-1"
          {...attrs}
          onClick={() => setShowResult(false)}
        >
          <PoperMovieSearch />
          <PoperMovieSearch />
          <PoperMovieSearch />
          <PoperMovieSearch />
          <PoperMovieSearch />
          <PoperMovieSearch />
          <PoperMovieSearch />

          <Link to="/moviesearch">
            <div className="block p-3 pt-1 text-lg text-primary opacity-70 hover:opacity-100">
              {`View all results for "${searchValue}"`}
            </div>
          </Link>
        </div>
      )}
    >
      <div className="search-field search-fade-in group relative text-onBackground">
        <i className="fa-solid fa-magnifying-glass transition-short absolute left-3 top-1/2 translate-y-[-50%] text-lg opacity-40 group-focus-within:opacity-0 "></i>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setShowResult(false);
          }}
          autoFocus={focus}
          onFocus={() => setShowResult(true)}
          type="text"
          name="search"
          placeholder="Search any movies..."
          autoComplete="off"
          spellCheck={false}
          style={{ width: size }}
          className="transition-short boxshadow-searchfield hover:search-hover h-12 rounded-lg bg-banner pl-11 pr-4 text-lg leading-[48px] outline-none placeholder:opacity-60 focus:pl-4"
        />

        {!!searchValue && !loading && (
          <i
            className="fa-solid fa-circle-xmark loading-icon cursor-pointer hover:opacity-100"
            onClick={handleClear}
          ></i>
        )}

        {loading && (
          <i className="fa-solid fa-spinner loading-icon loading"></i>
        )}
      </div>
    </Tippy>
  );
};

export default Search;
