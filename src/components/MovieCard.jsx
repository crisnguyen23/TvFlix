import { Link } from "react-router-dom";
import sliderControl from "../assets/images/slider-control.jpg";

const MovieCard = ({ size }) => {
  return (
    <section>
      <Link to="/movie/:id">
        <div style={{ width: size }}>
          <figure className="poster-box">
            <img
              src={sliderControl}
              alt=""
              className="img-cover aspect-[2/3] rounded-2xl"
            />
          </figure>
          <h4 className="mb-1 mt-2 w-full truncate text-xl font-bold tracking-[0.5px]">
            Puss in Boots: The Last Wish
          </h4>

          <div className="meta-list flex flex-wrap items-center justify-between gap-3">
            <div className="meta-item flex items-center gap-1">
              <i className="fa-solid fa-star text-[14px] text-[#fcb900]"></i>
              <span>8.4</span>
            </div>
            <div className="card-badge">2023</div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default MovieCard;
