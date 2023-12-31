import MovieCard from "./MovieCard";

const MovieGridList = ({ movieList }) => {
  return (
    <section>
      <div className="grid-list">
        {movieList.map((movieCard) => (
          <MovieCard size="100%" data={movieCard} key={movieCard.id} />
        ))}
      </div>
    </section>
  );
};

export default MovieGridList;
