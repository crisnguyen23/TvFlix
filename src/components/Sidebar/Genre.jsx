import { Link } from "react-router-dom";

const Genre = ({ name, id }) => {
  return (
    <section>
      <Link to={`/TvFlix/movie/${id}/${name}`}>
        <span className="genere-list">{name}</span>
      </Link>
    </section>
  );
};

export default Genre;
