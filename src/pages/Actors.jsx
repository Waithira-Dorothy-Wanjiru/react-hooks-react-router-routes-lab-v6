import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component

function Actors() {
  const [actors, setActors] = useState([]);

  // Fetch actors from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar /> {/* Render the NavBar component */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {/* Map through the actors data and display each actor */}
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
