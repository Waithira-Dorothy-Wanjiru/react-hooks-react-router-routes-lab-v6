import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import MovieCard from "../components/MovieCard"; // Import the MovieCard component

function Home() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar /> {/* Render the NavBar component */}
      </header>
      <main>
        <h1>Home Page</h1>
        {/* Map through the movies data and display each movie */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
