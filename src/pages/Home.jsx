import Banner from "../components/Banner";
import { MovieListingSlider } from "../sections";

const Home = () => {
  return (
    <div className="containerr">
      <Banner />
      <MovieListingSlider />
      <MovieListingSlider />
      <MovieListingSlider />
    </div>
  );
};

export default Home;
