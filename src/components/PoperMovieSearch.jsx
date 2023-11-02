import { Link } from "react-router-dom";
import sliderControl from "../assets/images/slider-control.jpg";

const PoperMovieSearch = () => {
  return (
    <Link to="/movie/:id">
      <div className="transition-short group mb-3 flex items-center opacity-70 hover:opacity-100">
        <div className="poster-box aspect-[2/3] w-10 flex-shrink-0 rounded-[4px]">
          <img src={sliderControl} alt="" className="img-cover" />
        </div>
        <div className="ml-3 flex-1">
          <div className="transition-short text-[18px] text-white">
            <h4 className="truncate text-[18px] font-bold">
              Puss in Boots: The Last Wish
            </h4>
            <p className="opacity-50 group-hover:opacity-100">2022</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PoperMovieSearch;
