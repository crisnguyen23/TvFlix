import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import {
  Home,
  MovieGenreList,
  MovieSearchList,
  MovieDetail,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="desktop:grid-cols-main desktop:grid">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TvFlix/" element={<Home />} />
          <Route path="/moviegenrelist" element={<MovieGenreList />} />
          <Route path="/moviesearch" element={<MovieSearchList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
