import { useState } from "react";
import { Link } from "react-router-dom";

import copyrighticon from "../assets/icons/copyright-sign.svg";
import logoTMDB from "../assets/logos/tmdb-logo.svg";

const Sidebar = () => {
  return (
    <nav className="sidebar-inner desktop:static absolute desktop:h-sidebar-dk  h-sidebar desktop:border-t-0 top-s[96px] bottom-0 left-[-340px] w-full max-w-[340px] desktop:w-[250px] overflow-y-overlay bg-background z-[4] transition-long pt-9 pb-4 grid gap-5 ">
      <div className="sidebar-list">
        <p className="text-[22px] mb-2 font-bold tracking-[0.5px]">Genre</p>
        <Link to="/moviegenre">
          <span className="genere-list">Adventure</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Fantasy</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Animation</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Adventure</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Fantasy</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Animation</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Adventure</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Fantasy</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Animation</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Adventure</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Fantasy</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Animation</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Adventure</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Fantasy</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Animation</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Action</span>
        </Link>
      </div>

      <div className="sidebar-list">
        <p className="text-[22px] mb-2 font-bold tracking-[0.5px]">Language</p>
        <Link to="/moviegenre">
          <span className="genere-list">English</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">France</span>
        </Link>
        <Link to="/moviegenre">
          <span className="genere-list">Hindi</span>
        </Link>
      </div>

      <div className="sidebar-footer text-onSurfaceVariant text-center border-sidebar pt-7 mt-4">
        <img
          src={logoTMDB}
          alt="TMDB logo"
          className="w-[130px] h-[17px] mx-14 mb-5"
        />

        <p>
          <img
            src={copyrighticon}
            alt=""
            className="inline-block translate-y-[-3px]"
          />{" "}
          Copyright 2023
          <div className="leading-7">
            {" "}
            Dev by{" "}
            <a
              href="./https://www.linkedin.com/in/longnd5273/"
              className="inline"
            >
              <span className="text-white inline">
                Cris Nguyen <i className="fa-brands fa-linkedin"></i>
              </span>
            </a>
          </div>
        </p>
      </div>
    </nav>
  );
};

export default Sidebar;
