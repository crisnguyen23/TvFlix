import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logos/logo.svg";
import Search from "./Search";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

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
    <header className="header relative desktop:py-7 desktop:px-14 py-6 px-4 flex justify-between items-center gap-2">
      {!showSearchBar && (
        <>
          <Link to="/" className="logo mr-auto">
            <img
              src={logo}
              alt="TvFlix home"
              className="desktop:w-40 w-[140px]"
            />
          </Link>
          <div
            className="group btn-bg"
            onClick={() => {
              setShowSearchBar(true);
            }}
          >
            <i className="fa-solid fa-magnifying-glass opacity-40 group-hover:opacity-100"></i>
          </div>

          <div
            className="desktop:hidden max-desktop:order-3 h-12 w-12 leading-[48px] text-center cursor-pointer hover:opacity-60"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <i className="fa-solid fa-bars text-[24px]"></i>
          </div>
        </>
      )}

      <div className="max-mobile:hidden">
        <Search size={"360px"} />
      </div>

      {showSearchBar && (
        <div className="mobile:hidden flex-1 flex">
          <div className="inline-block flex-1">
            <Search size={"100%"} focus={showSearchBar} />
          </div>
          <div
            className="group btn-bg inline-block ml-2 search-fade-in"
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
