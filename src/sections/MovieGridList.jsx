import MovieCard from "../components/MovieCard";

const MovieGridList = () => {
  return (
    <section>
      <div className="grid-list">
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
        <MovieCard size="100%" />
      </div>
      <button className="btn mx-auto mb-[60px] mt-9">
        <span>Load More</span>
      </button>
    </section>
  );
};

export default MovieGridList;
