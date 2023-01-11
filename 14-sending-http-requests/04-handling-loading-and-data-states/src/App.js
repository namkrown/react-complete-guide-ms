import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    // Default sends a get request
    console.log("App::fetchMoviesHandler-start");

    const response = await fetch("https://swapi.dev/api/films");

    console.log(
      "response received status=" +
        response.status +
        ", statusText=" +
        response.statusText
    );

    const data = await response.json();

    console.log("response body converted to json finished");

    const transformedMovies = data.results.map((swapiMovie) => {
      console.log("mapping swapiMovie id=" + swapiMovie.id);
      return {
        id: swapiMovie.episode_id,
        title: swapiMovie.title,
        openingTxt: swapiMovie.opening_crawl,
        releaseDate: swapiMovie.release_date,
      };
    });

    console.log("finished converting swapiMovies to internalModels");
    console.log(transformedMovies);

    setMovies(transformedMovies);

    console.log("App::fetchMoviesHandler-end");
  }

  /*
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
*/
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
