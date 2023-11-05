import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MovieGridList } from "../components";
import {
  fetchMovieListGenre,
  fetchMoreMovieLoad,
  removeMovieList,
} from "../redux/movieSlice";

const MovieGenrePage = () => {
  let key = "";
  const [currentPage, setCurrentPage] = useState(1);

  const { id, genre } = useParams();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies.movieList);
  const loadingBtnLoadMore = useSelector(
    (state) => state.movies.loadingBtnLoadMore,
  );

  if (isNaN(id)) {
    key = "with_original_language";
  } else {
    key = "with_genres";
  }

  useEffect(() => {
    dispatch(fetchMovieListGenre({ key, id }));

    return () => {
      dispatch(removeMovieList());
    };
  }, [id]);

  const handleLoadMoreMovie = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    const nextPage = currentPage + 1;
    dispatch(fetchMoreMovieLoad({ key, id, nextPage }));
  };

  return (
    <section className="containerr">
      {movieList.length === 0 ? (
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
                {`All ${genre} Movies`}
              </h1>
            </div>
            <MovieGridList movieList={movieList} />
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

export default MovieGenrePage;
