import { useEffect } from "react";

import Banner from "./Banner";
import { MovieListingSlider } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieNowPlaying,
  fetchMoviePopular,
  fetchMovieUpcoming,
  fetchMovieTopRated,
} from "../../redux/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const moviePlaying = useSelector((state) => state.movies.moviePlaying);
  const moviePopular = useSelector((state) => state.movies.moviePopular);
  const movieUpcoming = useSelector((state) => state.movies.movieUpcoming);
  const movieTopRated = useSelector((state) => state.movies.movieTopRated);

  useEffect(() => {
    dispatch(fetchMovieNowPlaying());
    dispatch(fetchMoviePopular());
    dispatch(fetchMovieUpcoming());
    dispatch(fetchMovieTopRated());
  }, []);

  return (
    <div className="containerr">
      <Banner data={moviePlaying.slice(0, 10)} />
      <MovieListingSlider
        title={"Weekly Trending Movies"}
        movieSlider={moviePopular}
      />
      <MovieListingSlider
        title={"Upcoming Movies"}
        movieSlider={movieUpcoming}
      />
      <MovieListingSlider
        title={"Top Rated Movies"}
        movieSlider={movieTopRated}
      />
    </div>
  );
};

export default Home;
