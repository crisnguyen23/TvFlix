import { useSelector } from "react-redux";

import Genre from "./Genre";
import logoTMDB from "../../assets/logos/tmdb-logo.svg";
import copyrighticon from "../../assets/icons/copyright-sign.svg";

const Sidebar = () => {
  const genreList = useSelector((state) => state.movies.genreList);

  return (
    <nav className="sidebar desktop:h-desktop h-tablet top-s[96px]  overflow-y-overlay transition-long absolute bottom-0 left-[-340px] z-[4] w-full max-w-[340px] bg-background desktop:static desktop:w-[250px] desktop:border-t-0">
      <div className="sidebar-inner grid gap-5 pb-3 pt-9 ">
        <div className="sidebar-list">
          <h4 className="mb-2 text-[22px] font-bold tracking-[0.5px]">Genre</h4>
          {genreList.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <>
              {genreList.map((genre) => (
                <Genre key={genre.id} name={genre.name} id={genre.id} />
              ))}
            </>
          )}
        </div>
        <div className="sidebar-list">
          <h4 className="mb-2 text-[22px] font-bold tracking-[0.5px]">
            Country
          </h4>
          <Genre name="Việt Nam" id={"vi"} />
          <Genre name="Korean" id={"ko"} />
          <Genre name="Japanese" id={"ja"} />
          <Genre name="Thailand" id={"th"} />
        </div>
        <div className="sidebar-footer border-sidebar pt-7 text-center text-onSurfaceVariant">
          <img
            src={logoTMDB}
            alt="TMDB logo"
            className="mx-14 mb-5 h-[17px] w-[130px]"
          />
          <div>
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
                href="https://www.linkedin.com/in/longnd5273/"
                className="inline"
              >
                <span className="inline text-white">
                  Cris Nguyen <i className="fa-brands fa-linkedin"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
