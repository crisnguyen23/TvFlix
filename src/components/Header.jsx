import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideBar, chooseGenre } from "../redux/movieSlice";

import logo from "../assets/logos/logo.svg";
import Search from "./Search/Search";

const Header = () => {
  const dispatch = useDispatch();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const showSideBar = useSelector((state) => state.movies.showSideBar);

  const setWindowDimensions = () => {
    if (window.innerWidth > 768) {
      setShowSearchBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <header className="header relative flex items-center justify-between gap-2 px-4 py-6 desktop:px-8 desktop:py-7">
      {!showSearchBar && (
        <>
          <Link to="/TvFlix/" className="logo mr-auto">
            <img
              src={logo}
              alt="TvFlix home"
              className="w-[140px] desktop:w-40"
              onClick={() => {
                dispatch(chooseGenre(""));
                dispatch(setShowSideBar(false));
              }}
            />
          </Link>
          <div
            className="btn-bg group"
            onClick={() => {
              setShowSearchBar(true);
            }}
          >
            <i className="fa-solid fa-magnifying-glass opacity-40 group-hover:opacity-100"></i>
          </div>

          <div
            className="h-12 w-12 cursor-pointer text-center leading-[48px] hover:opacity-60 max-desktop:order-3 desktop:hidden"
            onClick={() => {
              dispatch(setShowSideBar(!showSideBar));
            }}
            style={{ opacity: showSideBar ? "1" : "" }}
          >
            <i className="fa-solid fa-bars text-[24px]"></i>
          </div>
        </>
      )}

      <div className="max-tablet:hidden">
        <Search size={"360px"} />
      </div>

      {showSearchBar && (
        <div className="flex flex-1 tablet:hidden">
          <div className="inline-block flex-1">
            <Search size={"100%"} focus={showSearchBar} />
          </div>
          <div
            className="btn-bg group ml-2 inline-block"
            onClick={() => {
              setShowSearchBar(false);
            }}
          >
            <i className="fa-solid fa-xmark opacity-40 group-hover:opacity-100"></i>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
