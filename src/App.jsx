import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  MovieGenre,
  MovieDetail,
  MovieSearch,
  PageNotFound,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviegenre" element={<MovieGenre />} />
            <Route path="/moviesearch" element={<MovieSearch />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
