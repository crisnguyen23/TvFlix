import MovieCard from "./MovieCard";

const MovieGridList = ({ movieList }) => {
  return (
    <section>
      <div className="grid-list">
        {movieList.length > 0 ? (
          <>
            {movieList.map((movieCard) => (
              <MovieCard size="100%" data={movieCard} key={movieCard.id} />
            ))}
            <button className="btn mx-auto mb-[60px] mt-9">
              <span>Load More</span>
            </button>
          </>
        ) : (
          <div className="relative ml-3">
            <div className="absolute top-6 w-[50px] ">
              <i className="fa-solid fa-circle-notch loading-page inline-block w-[40px] text-[40px] text-primary"></i>
            </div>
            <div className="heading ml-14 text-[42px]">Loading....</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieGridList;
