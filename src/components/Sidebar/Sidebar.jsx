import { setShowSideBar } from "../../redux/movieSlice";
import { useSelector, useDispatch } from "react-redux";

import Genre from "./Genre";
import logoTMDB from "../../assets/logos/tmdb-logo.svg";
import copyrighticon from "../../assets/icons/copyright-sign.svg";

const Sidebar = () => {
  const dispatch = useDispatch();
  const genreList = useSelector((state) => state.movies.genreList);
  const showSideBar = useSelector((state) => state.movies.showSideBar);

  return (
    <nav
      className="sidebar desktop:h-desktop h-tablet top-s[96px] overflow-y-overlay transition-long absolute bottom-0 z-[10] max-w-[340px] bg-background desktop:static desktop:border-t-0"
      style={{ left: showSideBar ? "0" : "-250px" }}
    >
      <div className="sidebar-inner grid gap-5 pb-3 pt-9 ">
        <div className="sidebar-list">
          <h4 className="mb-2 text-[22px] font-bold tracking-[0.5px]">Genre</h4>
          {genreList.length === 0 ? (
            <div className="mt-[-30px]">
              <div className="inline-block translate-y-[42px]">
                <i className="fa-solid fa-circle-notch loading-search w-[22px] text-[22px] text-primary"></i>
              </div>
              <div className="ml-[28px] inline-block text-[20px] text-textColor">
                Loading....
              </div>
            </div>
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

      <section
        className="overlay transition-sidebar fixed bottom-0  left-[250px] top-[96px] z-[3] w-full bg-background opacity-50"
        hidden={!showSideBar}
        onClick={() => {
          dispatch(setShowSideBar(false));
        }}
      ></section>
    </nav>
  );
};

export default Sidebar;
