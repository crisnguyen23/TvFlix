import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { imageBaseURL } from "../../utils/api";
import { chooseGenre, setShowSideBar } from "../../redux/movieSlice";

const MovieItemSearch = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Link to={`/TvFlix/movie/detail/${data.id}`}>
      <div
        className="transition-short group mb-3 flex items-center opacity-70 hover:opacity-100"
        onClick={() => {
          dispatch(chooseGenre(""));
          dispatch(setShowSideBar(false));
        }}
      >
        <div className="poster-box aspect-[2/3] w-10 flex-shrink-0 rounded-[4px]">
          {data.poster_path && (
            <img
              src={`${imageBaseURL}/original/${data.poster_path}`}
              alt={data.title}
              className="img-cover"
              loading="lazy"
            />
          )}
        </div>
        <div className="ml-3 flex-1">
          <div className="transition-short text-[18px] text-white">
            <h4 className="truncate text-[18px] font-bold">{data.title}</h4>
            <p className="opacity-50 group-hover:opacity-100">
              {data.release_date.split("-")[0] ?? "Not Released"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default MovieItemSearch;
