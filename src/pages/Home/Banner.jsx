import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { imageBaseURL } from "../../utils/api";

const Banner = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const genreList = useSelector((state) => state.movies.genreList);

  if (data.length > 0) {
    var {
      id,
      backdrop_path,
      poster_path,
      title,
      release_date,
      vote_average,
      genre_ids,
      overview,
    } = data[currentIndex];

    var genreChar = [];

    if (genreList.length > 0) {
      genre_ids.forEach((id) => {
        let genreFilter = genreList.find((genre) => genre.id === id);
        genreChar.push(genreFilter.name);
      });
    }
  }

  return (
    <>
      {data.length === 0 || genreChar === 0 ? (
        <></>
      ) : (
        <div className="banner relative h-[700px] overflow-x-hidden rounded-3xl tablet:h-[500px]">
          <div className="banner-slider">
            <div className="slider-item absolute left-0 top-0 h-full w-full">
              <img
                src={`${imageBaseURL}/original/${backdrop_path || poster_path}`}
                alt={title}
                className="img-cover"
                loading="lazy"
              />
            </div>

            <div className="banner-content absolute bottom-[206px] left-6 right-auto z-[1] max-w-[480px] text-[#ffffffb0] tablet:bottom-1/2 tablet:left-[50px] tablet:translate-y-1/2 desktop:left-[100px] ">
              <h2 className="heading title-banner mb-4 text-[40px] tracking-[2px] tablet:text-[54px] tablet:tracking-[3px]">
                {title}
              </h2>
              <div className="meta-list">
                <div> {release_date.split("-")[0] ?? "Not Released"}</div>
                <div className="card-badge">{vote_average.toFixed(1)}</div>
              </div>
              <p className="genre my-3">{genreChar.join(", ")}</p>
              <p className="banner-text mb-6">{overview}</p>
              <Link to={`/TvFlix/movie/detail/${id}`}>
                <button className="btn">
                  <i className="fa-regular fa-circle-play text-[24px]"></i>
                  <span>Watch Now</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="slider-list tablet:left-slider-mobile absolute bottom-5 left-5 right-0 overflow-x-auto pb-2 ">
            <div className="control-inner flex gap-3">
              {data.map((playing, index) => (
                <div
                  className="poster-box slider-item"
                  style={{
                    filter:
                      index === currentIndex
                        ? "brightness(1)"
                        : "brightness(0.4)",
                  }}
                  onClick={() => setCurrentIndex(index)}
                  key={playing.id}
                >
                  <img
                    src={`${imageBaseURL}/original/${
                      playing.poster_path || playing.backdrop_path
                    }`}
                    alt={playing.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
