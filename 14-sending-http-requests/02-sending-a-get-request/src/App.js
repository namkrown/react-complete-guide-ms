import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMoviesHandler() {
    // Default sends a get request
    console.log("App::fetchMoviesHandler-start");
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        console.log("App::fetchMoviesHandler response received");
        console.log(response.status);
        console.log(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log(
          "App::fetchMoviesHandler response body converted to json finished"
        );
        console.log(data);
        const transformedMovies = data.results.map((swapiMovie) => {
          console.log(
            "converting swapiMovie to internal movie model id=" + swapiMovie.id
          );
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
      });
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
