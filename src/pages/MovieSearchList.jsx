import { MovieGridList } from "../sections/";

const MovieSearchList = () => {
  return (
    <section className="containerr">
      <div className="movie-list pt-8">
        <p className="tablet:text-[36px] mb-2 text-[24px] font-bold text-primary">
          Results for
        </p>
        <h1 className="heading tablet:text-[54px] mb-[32px] text-[40px] tracking-[2px]">
          "hello"
        </h1>
        <MovieGridList />
      </div>
    </section>
  );
};

export default MovieSearchList;
