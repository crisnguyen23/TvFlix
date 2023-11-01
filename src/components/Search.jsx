import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

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
    }, 1000);
  }, [debounced]);

  return (
    <Tippy
      interactive
      onClickOutside={() => setShowResult(false)}
      visible={showResult && searchValue.length > 0}
      render={(attrs) => (
        <div
          className="max-h-[calc(100dvh -144px)] min-h-[100px] rounded-lg bg-banner text-white overflow-auto pt-2"
          style={{ width: size === "100%" ? "calc(100dvw - 80px)" : size }}
          tabIndex="-1"
          {...attrs}
        >
          {/* {searchResult.map((result) => (
          <PoperMovieSearch key={result.Search.imdbID} data={result.Search} />
        ))} */}
          <Link
            to="/"
            className="block p-3 pt-0 text-center text-white text-xl"
          >
            {`View all results for "${searchValue}"`}
          </Link>
        </div>
      )}
    >
      <div className="search-field text-onBackground relative group">
        <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 translate-y-[-50%] text-lg opacity-40 transition-short group-focus-within:opacity-0 "></i>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          autoFocus={focus}
          onFocus={() => setShowResult(true)}
          type="text"
          name="search"
          placeholder="Search any movies..."
          autoComplete="off"
          spellCheck={false}
          style={{ width: size }}
          className="search-fade-in h-12 leading-[48px] pl-11 pr-4 outline-none bg-banner rounded-lg transition-short boxshadow-searchfield focus:pl-4 text-lg placeholder:opacity-60"
        />

        {!!searchValue && !loading && (
          <i
            className="fa-solid fa-circle-xmark loading-icon hover:opacity-100 cursor-pointer"
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
