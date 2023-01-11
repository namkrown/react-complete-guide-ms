import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    // Default sends a get request
    console.log("App::fetchMoviesHandler-start");

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");

      console.log(
        "response received status=" +
          response.status +
          ", statusText=" +
          response.statusText
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong! status=" +
            response.status +
            ", statusText=" +
            response.statusText
        );
      }

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
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);

    console.log("App::fetchMoviesHandler-end");
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  /*
  async function fetchMoviesHandler() {
    // Default sends a get request
    console.log("App::fetchMoviesHandler-start");

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films");

      console.log(
        "response received status=" +
          response.status +
          ", statusText=" +
          response.statusText
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong! status=" +
            response.status +
            ", statusText=" +
            response.statusText
        );
      }

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
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);

    console.log("App::fetchMoviesHandler-end");
  }
  */

  let content = <p>Houston, we have a problem...</p>;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (movies.length <= 0) {
    content = <p>Found no movies</p>;
  } else {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
