import { useEffect } from "react";

import { useSelector } from "react-redux";
import Banner from "./Banner";
import { MovieListingSlider } from "../../components";

const Home = () => {
  const moviePopular = useSelector((state) => state.movies.moviePopular);
  const movieTrending = useSelector((state) => state.movies.movieTrending);
  const movieUpcoming = useSelector((state) => state.movies.movieUpcoming);
  const movieTopRated = useSelector((state) => state.movies.movieTopRated);

  return (
    <div className="containerr">
      <Banner data={moviePopular.slice(0, 10)} />
      <MovieListingSlider
        title={"Weekly Trending Movies"}
        movieSlider={movieTrending}
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
