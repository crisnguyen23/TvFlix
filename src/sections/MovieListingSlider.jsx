import MovieCard from "../components/MovieCard";

const MovieListingSlider = () => {
  return (
    <div className="movie-list pt-8">
      <h3 className="mb-6 text-[26px] font-bold tracking-[0.5px]">
        Weekly Trending Movies
      </h3>

      <div className="slider-list slider-large">
        <div className="slider-inner flex gap-4 before:min-w-[4px] after:min-w-[4px]">
          <MovieCard size="200px" />
          <MovieCard size="200px" />
          <MovieCard size="200px" />
          <MovieCard size="200px" />
          <MovieCard size="200px" />
          <MovieCard size="200px" />
          <MovieCard size="200px" />
          <MovieCard size="200px" />
        </div>
      </div>
    </div>
  );
};

export default MovieListingSlider;
