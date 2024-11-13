import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component

function Directors() {
  const [directors, setDirectors] = useState([]);

  // Fetch directors from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar /> {/* Render the NavBar component */}
      </header>
      <main>
        <h1>Directors Page</h1>
        {/* Map through the directors data and display each director */}
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
