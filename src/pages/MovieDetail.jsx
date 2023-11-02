import { MovieListingSlider } from "../sections";
import sliderControl from "../assets/images/slider-control.jpg";

const MovieDetail = () => {
  return (
    <div className="containerr">
      <div className="movie-detail tablet:flex tablet:items-start tablet:gap-10">
        <div className="backdrop-image"></div>

        <div className="poster-box tablet:sticky tablet:flex-shrink-0 tablet:top-0 w-full max-w-[300px]">
          <img src={sliderControl} alt="img-cover" />
        </div>
        <div className="detail-box tablet:flex-grow">
          <div className="detail-content max-w-[750px]">
            <h1 className="heading mb-3 mt-6 text-[54px] tracking-[3px] ">
              Puss in Boots: The Last Wish
            </h1>
            <div className="meta-list text-textColor">
              <div className="meta-item flex items-center gap-1">
                <i className="fa-solid fa-star text-[14px] text-[#fcb900]"></i>
                <span>8.4</span>
              </div>
              <div className="iconDot"></div>
              <div className="meta-item">103m</div>
              <div className="iconDot"></div>
              <div className="meta-item">2022</div>
              <div className="meta-item card-badge">PG</div>
            </div>
            <p className="genre mb-4 mt-3 text-textColor">
              Adventure, Fantasy, Animation, Comedy, Family, Action
            </p>
            <p className="overview">
              Puss in Boots discovers that his passion for adventure has taken
              its toll: He has burned through eight of his nine lives, leaving
              him with only one life left. Puss sets out on an epic journey to
              find the mythical Last Wish and restore his nine lives.
            </p>
            <ul className="detail-list mb-8 mt-6">
              <div className="list-info">
                <div className="list-name">Starring</div>
                <p>
                  Antonio Banderas, Salma Hayek Pinault, Harvey Guillén, Wagner
                  Moura, Florence Pugh, Olivia Colman, Ray Winstone, Samson
                  Kayo, John Mulaney, Da'Vine Joy Randolph
                </p>
              </div>
              <div className="list-info">
                <div className="list-name">Directed By</div>
                <p>Joel Crawford</p>
              </div>
            </ul>
          </div>
          <div className="title-wrapper mb-6">
            <h3 className="text-[26px] font-bold tracking-[0.5px]">
              Trailers and Clips
            </h3>
          </div>
          <div className="slider-large tablet:ml-0 rounded-2xl">
            <div className="slider-inner relative flex gap-4 ">
              <div className="video-card"></div>
              <div className="video-card"></div>
              <div className="video-card"></div>
              <div className="video-card"></div>
              <div className="video-card"></div>
            </div>
          </div>
        </div>
      </div>
      <MovieListingSlider />
    </div>
  );
};

export default MovieDetail;
