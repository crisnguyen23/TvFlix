import { useEffect } from "react";

import { useSelector } from "react-redux";
import Banner from "./Banner";
import { MovieListingSlider } from "../../components";

const Home = () => {
  const movieTrending = useSelector((state) => state.movies.movieTrending);
  const moviePopular = useSelector((state) => state.movies.moviePopular);
  const movieUpcoming = useSelector((state) => state.movies.movieUpcoming);
  const movieTopRated = useSelector((state) => state.movies.movieTopRated);

  return (
    <div className="containerr">
      <Banner data={movieTrending.slice(0, 10)} />
      <MovieListingSlider
        title={"Upcoming Movies"}
        movieSlider={movieUpcoming}
        path={"upcoming/Upcoming"}
      />
      <MovieListingSlider
        title={"Top Rated Movies"}
        movieSlider={movieTopRated}
        path={"top_rated/Top Rated"}
      />
      <MovieListingSlider
        title={"Popular Movies"}
        movieSlider={moviePopular}
        path={"popular/Popular"}
      />
    </div>
  );
};

export default Home;
