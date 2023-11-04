import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSearchPage } from "../redux/movieSlice";
import { MovieGridList } from "../components";

const MovieSearchList = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.movies.searchPage);

  useEffect(() => {
    dispatch(fetchSearchPage(keyword));
  }, [keyword]);

  return (
    <section className="containerr">
      <div className="movie-list pt-8">
        <p className="tablet:text-[36px] mb-2 text-[24px] font-bold text-primary">
          Results for
        </p>
        <h1 className="heading tablet:text-[54px] mb-[32px] text-[40px] tracking-[2px]">
          {`"${keyword}"`}
        </h1>
        <MovieGridList movieList={searchResult} />
      </div>
    </section>
  );
};

export default MovieSearchList;
