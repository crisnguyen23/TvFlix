import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MovieGridList } from "../components";
import { fetchMovieListGenre, removeMovieList } from "../redux/movieSlice";

const MovieGenreList = () => {
  const { id, name } = useParams();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movies.movieList);
  let key = "";
  let currentPage = 1;

  const handleLoadMorePage = () => {};

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
  }, [dispatch, id]);

  console.log(id);
  return (
    <section className="containerr">
      <div className="genre-list pt-8">
        <div className="title mb-[56px]">
          <h1 className="heading tablet:text-[54px] text-[46px] tracking-[3px]">
            {`All ${name} Movies`}
          </h1>
        </div>
        <MovieGridList movieList={movieList} />
      </div>

      <button
        className="btn mx-auto mb-[60px] mt-9"
        onClick={handleLoadMorePage}
      >
        <span>Load More</span>
      </button>
    </section>
  );
};

export default MovieGenreList;
