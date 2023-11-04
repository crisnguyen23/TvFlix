import MovieCard from "./MovieCard";

const MovieListingSlider = ({ title, movieSlider }) => {
  return (
    <div className="movie-list pt-8">
      <h3 className="mb-6 text-[26px] font-bold tracking-[0.5px]">{title}</h3>
      <div className="slider-list slider-large">
        {movieSlider.length === 0 ? (
          <div className="mb-6 ml-8 h-[367px] text-[26px] font-bold tracking-[0.5px]">
            Loading...
          </div>
        ) : (
          <div className="slider-inner flex gap-4 before:min-w-[4px] after:min-w-[4px]">
            {movieSlider.slice(0, 10).map((movieCard) => (
              <MovieCard key={movieCard.id} size="200px" data={movieCard} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieListingSlider;
