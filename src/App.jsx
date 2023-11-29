import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  fetchGenreList,
  fetchMoviePopular,
  fetchMovieTrendingWeek,
  fetchMovieUpcoming,
  fetchMovieTopRated,
} from "./redux/movieSlice";
import { MainLayout, GlobalLoading } from "@/components";
import { publicRoutes } from "@/routes/routes";

function App() {
  const dispatch = useDispatch();
  const loadingPage = useSelector((state) => state.movies.loadingPage);
  const [watchLoading, setWatchLoading] = useState(false);

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
        <>
          {/* app routes */}
          <BrowserRouter>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = MainLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </BrowserRouter>

          {/* config toastify */}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      ) : (
        <GlobalLoading />
      )}
    </>
  );
}

export default App;
