import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Slider from "react-slick";

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
    genre_ids.forEach((id) => {
      let genreFilter = genreList.find((genre) => genre.id === id);
      genreChar.push(genreFilter.name);
    });
  }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <>
      {data.length === 0 ? (
        <></>
      ) : (
        <div className="banner tablet:h-[500px] relative h-[700px] overflow-x-hidden rounded-3xl">
          <div className="banner-slider">
            <div className="slider-item absolute left-0 top-0 h-full w-full">
              <img
                src={`${imageBaseURL}/w1280/${backdrop_path || poster_path}`}
                alt={title}
                className="img-cover"
                loading="lazy"
              />
            </div>

            <div className="banner-content tablet:bottom-1/2 tablet:left-[50px] tablet:translate-y-1/2 absolute bottom-[206px] left-6 right-auto z-[1] max-w-[480px] text-[#ffffffb0] desktop:left-[100px] ">
              <h2 className="heading tablet:text-[54px] tablet:tracking-[3px] mb-4 text-[40px] tracking-[2px]">
                {title}
              </h2>
              <div className="meta-list">
                <div> {release_date.split("-")[0] ?? "Not Released"}</div>
                <div className="card-badge">{vote_average.toFixed(1)}</div>
              </div>
              <p className="genre my-3">{genreChar.join(", ")}</p>
              <p className="banner-text mb-6">{overview}</p>
              <Link to={`/TvFlix/movie/${id}`}>
                <button className="btn">
                  <i className="fa-regular fa-circle-play text-[24px]"></i>
                  <span>Watch Now</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="slider-list tablet:left-slider-mobile absolute bottom-5 left-5 right-0 overflow-x-auto pb-2 ">
            <div className="control-inner flex gap-3">
              {/* <Slider {...settings}> */}
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
              {/* </Slider> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
