import { MovieGridList } from "../sections";

const MovieGenreList = () => {
  return (
    <section className="containerr">
      <div className="genre-list pt-8">
        <div className="title mb-[56px]">
          <h1 className="heading tablet:text-[54px] text-[46px] tracking-[3px]">
            All Comedy Movies
          </h1>
        </div>
        <MovieGridList />
      </div>
    </section>
  );
};

export default MovieGenreList;
