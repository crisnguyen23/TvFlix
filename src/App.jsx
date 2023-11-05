import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./assets/logos/logo.svg";
import {
  fetchGenreList,
  fetchMoviePopular,
  fetchMovieTrendingWeek,
  fetchMovieUpcoming,
  fetchMovieTopRated,
} from "./redux/movieSlice";
import { Header, Sidebar } from "./components";
import {
  Home,
  MovieHotHomePage,
  MovieGenrePage,
  MovieSearchPage,
  MovieDetailPage,
  PageNotFound,
} from "./pages";

function App() {
  const loadingPage = useSelector((state) => state.movies.loadingPage);
  const [watchLoading, setWatchLoading] = useState(false);
  const dispatch = useDispatch();

  setTimeout(() => {
    setWatchLoading(true);
  }, 1500);

  useEffect(() => {
    dispatch(fetchGenreList());
    dispatch(fetchMovieTrendingWeek());
    dispatch(fetchMovieUpcoming());
    dispatch(fetchMovieTopRated());
    dispatch(fetchMoviePopular());
  }, []);

  return (
    <>
      {loadingPage && watchLoading ? (
        <BrowserRouter>
          <Header />
          <main className="desktop:grid-cols-main desktop:grid">
            <Sidebar />
            <Routes>
              <Route path="/TvFlix/" element={<Home />} />
              <Route
                path="/TvFlix/movie/all/:path/:title"
                element={<MovieHotHomePage />}
              />
              <Route
                path="/TvFlix/movie/:genre/:id"
                element={<MovieGenrePage />}
              />
              <Route
                path="/TvFlix/movie/search/:keyword"
                element={<MovieSearchPage />}
              />
              <Route
                path="/TvFlix/movie/detail/:id"
                element={<MovieDetailPage />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      ) : (
        <main className="relative h-[100dvh] w-[dvw] bg-surface">
          <div className="absolute left-[50dvw] top-[50dvh] translate-x-[-50%] translate-y-[-50%] text-[220px]">
            <i className="fa-solid fa-circle-notch loading-page text-primary "></i>
            <img
              src={logo}
              alt="TvFlix"
              className="absolute left-[110px] top-[36px] w-[130px] translate-x-[-50%]"
            />
          </div>
        </main>
      )}
    </>
  );
}

export default App;
