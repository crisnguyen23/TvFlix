import MovieCard from "./MovieCard";

const MovieListingSlider = ({ title, movieSlider }) => {
  return (
    <div className="movie-list pt-8">
      <div>
        <h3 className="mb-6 text-[26px] font-bold tracking-[0.5px]">{title}</h3>
        {/* <h3> See all movies</h3> */}
      </div>
      <div className="slider-list slider-large">
        {movieSlider.length === 0 ? (
          // <div className="ml-10 ">
          //   <div className="inline-block translate-y-[12px]">
          //     <i className="fa-solid fa-circle-notch loading-page w-[24px] text-[24px] text-primary opacity-70"></i>
          //   </div>
          //   <div className="heading ml-[12px] inline-block text-[26px] text-textColor">
          //     Loading....
          //   </div>
          // </div>
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
