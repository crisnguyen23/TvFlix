import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchMovieDetail,
  fetchMovieSimilar,
  removeMovieDetail,
} from "../redux/movieSlice";
import { MovieListingSlider } from "../components";
import { imageBaseURL } from "../utils/api";

const MovieDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.movieDetail);
  const movieSimilar = useSelector((state) => state.movies.movieSimilar);

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    vote_average,
    genres,
    overview,
    releases,
    casts,
    videos,
  } = data;

  const getActors = (casts) =>
    casts
      .slice(0, 10)
      .map((actor) => actor.name)
      .join(", ");

  const getDirectors = (crewList) => {
    const directors = crewList.filter((staff) => staff.job === "Director");
    return directors.map((director) => director.name).join(", ");
  };

  // Only return trailers and testers video on Youtube , return an array
  const filterVideos = function (videoList) {
    return videoList.filter(
      ({ type, site }) =>
        (type === "Trailer" || type === "Teaser") && site === "YouTube",
    );
  };

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
    dispatch(fetchMovieSimilar(id));

    return () => {
      dispatch(removeMovieDetail());
    };
  }, [id]);

  return (
    <div className="containerr">
      {data.length === 0 ? (
        <div className="ml-4 mt-10">
          <div className="inline-block translate-y-[26px]">
            <i className="fa-solid fa-circle-notch loading-search w-[46px] text-[46px] text-primary"></i>
          </div>
          <div className="heading ml-[16px] inline-block text-[44px]">
            Loading....
          </div>
        </div>
      ) : (
        <>
          <div className="movie-detail tablet:flex tablet:items-start tablet:gap-10">
            <div
              className="backdrop-image"
              style={{
                backgroundImage: `url(${imageBaseURL}/w1280/${
                  backdrop_path || poster_path
                })`,
              }}
            ></div>
            <div className="poster-box tablet:sticky tablet:flex-shrink-0 tablet:top-0 w-full max-w-[300px]">
              <img
                src={`${imageBaseURL}/w342/${poster_path}`}
                alt={`${title}`}
                className="img-cover"
              />
            </div>
            <div className="detail-box tablet:flex-grow">
              <div className="detail-content max-w-[750px]">
                <h1 className="heading mb-3 mt-6 text-[54px] tracking-[3px] ">
                  {title}
                </h1>
                <div className="meta-list text-textColor">
                  <div className="meta-item flex items-center gap-1">
                    <i className="fa-solid fa-star text-[14px] text-[#fcb900]"></i>
                    <span>{vote_average.toFixed(1)}</span>
                  </div>
                  <div className="iconDot"></div>
                  <div className="meta-item">{runtime}</div>
                  <div className="iconDot"></div>
                  <div className="meta-item">
                    {release_date.split("-")[0] ?? "Not Released"}
                  </div>
                  <div className="meta-item card-badge">
                    {releases.countries[0].certification}
                  </div>
                </div>
                <p className="genre mb-4 mt-3 text-textColor">
                  {genres.map((genre) => genre.name).join(", ")}
                </p>
                <p className="overview">{overview}</p>
                <ul className="detail-list mb-8 mt-6">
                  <div className="list-info">
                    <div className="list-name">Cast</div>
                    <p>{getActors(casts.cast)}</p>
                  </div>
                  <div className="list-info">
                    <div className="list-name">Directed By</div>
                    <p>{getDirectors(casts.crew)}</p>
                  </div>
                </ul>
              </div>
              <div className="title-wrapper mb-6">
                <h3 className="text-[26px] font-bold tracking-[0.5px]">
                  Trailers and Clips
                </h3>
              </div>
              <div className="slider-large tablet:ml-0 ml-[2px] rounded-2xl">
                <div className="slider-inner relative flex gap-4 ">
                  {filterVideos(videos.results)
                    .slice(0, 5)
                    .map((video) => (
                      <div className="video-card" key={video.id}>
                        <iframe
                          width="500"
                          height="294"
                          src={`https://www.youtube.com/embed/${video.key}?&theme=dark&color=white&rel=0`}
                          frameBorder="0"
                          allowFullScreen="1"
                          title={video.name}
                          className="img-cover"
                          loading="lazy"
                        ></iframe>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <MovieListingSlider
            title={`You May Also Like`}
            movieSlider={movieSimilar}
          />
        </>
      )}
    </div>
  );
};

export default MovieDetailPage;
