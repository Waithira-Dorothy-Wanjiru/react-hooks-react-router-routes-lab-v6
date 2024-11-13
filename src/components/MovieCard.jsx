import { Link } from 'react-router-dom';

function MovieCard({ id, title }) {
  return (
    <article>
      <h2>{title}</h2>
      {/* Create a dynamic link to the Movie page */}
      <Link to={"http://localhost:4000/movie/${id}"}>View Details</Link>
    </article>
  );
};

export default MovieCard;
