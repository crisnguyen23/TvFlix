import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MovieGridList } from "../components";
import { fetchLoadMoreMovie } from "../redux/movieSlice";

const MovieHotHomePage = () => {
  let key = "";
  const dispatch = useDispatch();
  const { path, title } = useParams();
  const [currentPage, setCurrentPage] = useState(2);
  const loadingBtnLoadMore = useSelector(
    (state) => state.movies.loadingBtnLoadMore,
  );

  let data = [];
  switch (path) {
    case "upcoming":
      data = useSelector((state) => state.movies.movieUpcoming);
      break;
    case "popular":
      data = useSelector((state) => state.movies.moviePopular);
      break;
    case "top_rated":
      data = useSelector((state) => state.movies.movieTopRated);
      break;
    default:
      throw new Error("Error path!");
  }

  const handleLoadMoreMovie = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    dispatch(fetchLoadMoreMovie({ path, currentPage }));
  };

  return (
    <section className="containerr">
      {data.length === 0 ? (
        <div className="ml-4 mt-10">
          <div className="inline-block translate-y-[26px]">
            <i className="fa-solid fa-circle-notch loading-search w-[46px] text-[46px] text-primary"></i>
          </div>
          <div className="heading ml-[16px] inline-block text-[44px]">
            Loading....
          </div>
        </div>
      ) : (
        <>
          <div className="genre-list pt-8">
            <div className="title mb-[56px]">
              <h1 className="heading tablet:text-[54px] text-[46px] tracking-[3px]">
                {`All ${title} Movies`}
              </h1>
            </div>
            <MovieGridList movieList={data} />
          </div>
          <button
            className="btn mx-auto mb-[60px] mt-9 bg-primaryVariant"
            onClick={handleLoadMoreMovie}
          >
            <div>
              <div
                className="none mr-[6px] translate-y-[7px]"
                style={{
                  display: loadingBtnLoadMore ? "inline-block" : "none",
                }}
              >
                <i className="fa-solid fa-circle-notch loading-search w-[15px] text-[15px] text-white" />
              </div>
              Load More
            </div>
          </button>
        </>
      )}
    </section>
  );
};

export default MovieHotHomePage;
