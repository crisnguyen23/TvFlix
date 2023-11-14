import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchSearchPage,
  fetchLoadMoreSearchPage,
  setCurrentPage,
} from "../redux/movieSlice";
import { MovieGridList, Loading } from "../components";

const MovieSearchPage = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.movies.currentPage);
  const searchResult = useSelector((state) => state.movies.searchPage);
  const loadingBtnLoadMore = useSelector(
    (state) => state.movies.loadingBtnLoadMore,
  );
  const displayLoadMoreBtn = useSelector(
    (state) => state.movies.displayLoadMoreBtn,
  );

  useEffect(() => {
    dispatch(fetchSearchPage(keyword));
  }, [keyword]);

  const handleLoadMoreMovie = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(fetchLoadMoreSearchPage({ keyword, currentPage }));
  };
  console.log(currentPage);

  return (
    <section className="containerr">
      {searchResult.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="movie-list pt-8">
            <p className="mb-2 text-[24px] font-bold text-primary tablet:text-[36px]">
              Results for
            </p>
            <h1 className="heading mb-[32px] text-[40px] tracking-[2px] tablet:text-[54px]">
              {`"${keyword}"`}
            </h1>
            <MovieGridList movieList={searchResult} />
          </div>
          <button
            className="btn mx-auto mb-[60px] mt-9 bg-primaryVariant"
            onClick={handleLoadMoreMovie}
            style={{ display: displayLoadMoreBtn ? "block" : "none" }}
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

export default MovieSearchPage;
