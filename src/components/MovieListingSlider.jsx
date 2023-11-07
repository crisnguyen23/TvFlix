import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieListingSlider = ({ title, movieSlider, path }) => {
  const settings = {
    arrow: true,
    infinite: true,
    swipeToSlide: true,
    accessibility: true,
    variableWidth: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 5,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="movie-list pt-8">
      <Link to={`/TvFlix/movie/all/${path}`}>
        <div className="hover:opacity-60">
          <h3 className="mb-3 mr-2 inline-block text-[26px] font-bold tracking-[0.5px]">
            {title}
          </h3>
          {path ? (
            <i className="fa-solid fa-caret-right text-[24px]"></i>
          ) : (
            <></>
          )}
        </div>
      </Link>

      <div className="slider-homepage slick-custom group">
        <Slider {...settings}>
          {movieSlider.length === 0 ? (
            <></>
          ) : (
            movieSlider
              .slice(0, 10)
              .map((movieCard) => (
                <MovieCard key={movieCard.id} size="200px" data={movieCard} />
              ))
          )}
        </Slider>
      </div>
    </div>
  );
};

export default MovieListingSlider;
