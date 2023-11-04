import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import { fetchSearchMovies, removeSearchResults } from "../../redux/movieSlice";
import MovieItemSearch from "./MovieItemSearch";
import useDebounce from "../../hooks/useDebounce";

const Search = ({ size, focus }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  const inputRef = useRef();
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(searchValue, 500);
  const statusLoading = useSelector((state) => state.movies.status);
  const searchResult = useSelector((state) => state.movies.searchResults);

  const handleClear = () => {
    setSearchValue("");
    dispatch(removeSearchResults());
    inputRef.current.focus();
  };

  let loading = false;
  statusLoading === "loading" ? (loading = true) : (loading = false);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      dispatch(removeSearchResults());
      return;
    }

    dispatch(fetchSearchMovies(debouncedValue));
  }, [debouncedValue]);

  return (
    <Tippy
      interactive
      onClickOutside={() => setShowResult(false)}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div
          className="overflow-y-overlay max-h-[350px] min-h-[100px] rounded-lg bg-banner px-2 pt-2 text-white"
          style={{ width: size === "100%" ? "calc(100dvw - 80px)" : size }}
          tabIndex="-1"
          {...attrs}
          onClick={() => setShowResult(false)}
        >
          {searchResult.slice(0, 5).map((result) => (
            <MovieItemSearch key={result.id} data={result} />
          ))}
          <Link to={`/TvFlix/movie/search/${searchValue}`}>
            <div className="block truncate p-3 pt-1 text-lg text-primary opacity-70 hover:opacity-100">
              {`View all results for "${searchValue}"`}
            </div>
          </Link>

          {/* {searchResult.length === 0 && (
            <div className="block p-3 pt-1 text-lg truncate text-primary opacity-70 hover:opacity-100">
              {`Do not have any movies for "${searchValue}"`}
            </div>
          )} */}
        </div>
      )}
    >
      <div className="search-field search-fade-in group relative text-onBackground">
        <i className="fa-solid fa-magnifying-glass transition-short absolute left-3 top-1/2 translate-y-[-50%] text-lg opacity-40 group-focus-within:opacity-0 "></i>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => {
            if (!searchValue.startsWith(" ")) {
              setSearchValue(e.target.value);
            }
          }}
          autoFocus={focus}
          onFocus={() => setShowResult(true)}
          type="text"
          name="search"
          placeholder="Search any movies..."
          autoComplete="off"
          spellCheck={false}
          style={{ width: size }}
          className="transition-short boxshadow-searchfield hover:search-hover h-12 rounded-lg bg-banner pl-11 pr-4 text-lg leading-[48px] caret-white outline-none placeholder:opacity-60 focus:pl-4"
        />

        {!!searchValue && !loading && (
          <i
            className="fa-solid fa-circle-xmark loading-icon cursor-pointer hover:opacity-100"
            onClick={handleClear}
          ></i>
        )}

        {loading && (
          <i className="fa-solid fa-spinner loading-icon loading text-white opacity-100"></i>
          // <i class="fa-solid fa-circle-notch loading-icon loading text-primary opacity-100"></i>
        )}
      </div>
    </Tippy>
  );
};

export default Search;
