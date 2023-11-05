import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieListingSlider = ({ title, movieSlider, path }) => {
  return (
    <div className="movie-list pt-8">
      <Link to={`/TvFlix/movie/all/${path}`}>
        <div className="hover:opacity-60">
          <h3 className="mb-3 mr-2 inline-block text-[26px] font-bold tracking-[0.5px]">
            {title}
          </h3>
          <i className="fa-solid fa-caret-right text-[24px]"></i>
        </div>
      </Link>
      <div className="slider-list slider-large">
        {movieSlider.length === 0 ? (
          <></>
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
