import { Link } from "react-router-dom";
import { imageBaseURL } from "../utils/api";

const MovieCard = ({ size, data }) => {
  return (
    <section>
      <Link to={`/TvFlix/movie/detail/${data.id}`}>
        <div
          style={{ width: size }}
          className="transition-long hover:scale-110"
        >
          <figure className="poster-box">
            <img
              src={`${imageBaseURL}/original/${data.poster_path}`}
              alt={data.title}
              className="img-cover aspect-[2/3] rounded-2xl"
              loading="lazy"
            />
          </figure>
          <h4 className="mb-1 mt-2 w-full truncate text-xl font-bold tracking-[0.5px]">
            {data.title}
          </h4>

          <div className="meta-list flex flex-wrap items-center justify-between gap-3">
            <div className="meta-item flex items-center gap-1">
              <i className="fa-solid fa-star text-[14px] text-[#fcb900]"></i>
              <span>{data.vote_average.toFixed(1)}</span>
            </div>
            <div className="card-badge">
              {data.release_date.split("-")[0] ?? "Not Released"}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default MovieCard;
