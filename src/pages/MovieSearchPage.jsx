import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSearchPage } from "../redux/movieSlice";
import { MovieGridList, Loading } from "../components";

const MovieSearchPage = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.movies.searchPage);

  useEffect(() => {
    dispatch(fetchSearchPage(keyword));
  }, [keyword]);

  return (
    <section className="containerr">
      {searchResult.length === 0 ? (
        <Loading />
      ) : (
        <div className="movie-list pt-8">
          <p className="mb-2 text-[24px] font-bold text-primary tablet:text-[36px]">
            Results for
          </p>
          <h1 className="heading mb-[32px] text-[40px] tracking-[2px] tablet:text-[54px]">
            {`"${keyword}"`}
          </h1>
          <MovieGridList movieList={searchResult} />
        </div>
      )}
    </section>
  );
};

export default MovieSearchPage;
