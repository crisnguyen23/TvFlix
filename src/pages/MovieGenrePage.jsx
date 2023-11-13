import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MovieGridList, Loading } from "../components";
import {
  fetchMovieListGenre,
  fetchMoreMovieGenre,
  removeMovieList,
} from "../redux/movieSlice";

const MovieGenrePage = () => {
  let key = "";
  const dispatch = useDispatch();
  const { genre, id } = useParams();
  const [currentPage, setCurrentPage] = useState(2);
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
    dispatch(fetchMoreMovieGenre({ key, id, currentPage }));
  };

  return (
    <section className="containerr">
      {movieList.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="genre-list pt-8">
            <div className="title mb-[56px]">
              <h1 className="heading text-[46px] tracking-[3px] tablet:text-[54px]">
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
