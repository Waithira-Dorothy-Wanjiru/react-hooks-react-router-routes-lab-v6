import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar"; // Import the NavBar component

function Movie() {
  const [movie, setMovie] = useState(null); // State to hold movie details
  const { id } = useParams(); // Get the movie ID from the URL parameters

  // Fetch the movie details based on the movie ID
  useEffect(() => {
    fetch("http://localhost:4000/movies/${id}")
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]); // Re-fetch when the ID changes

  return (
    <>
      <header>
        <NavBar /> {/* Render the NavBar component */}
      </header>
      <main>
        {movie ? (
          <div>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
