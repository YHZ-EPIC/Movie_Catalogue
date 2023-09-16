import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Components/MovieCard";

// TMDB API
const apiKey = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;

export default function App() {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState({});
  const [searchTitle, setSearchTitle] = useState("");
  const [section, setSection] = useState("Discover");

  // Discover
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log("\n --> Movies Data : ", response.data.results); // Log the fetched data
        setMovie(response.data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  // Genre Fetch
  useEffect(() => {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    axios
      .get(genresUrl)
      .then((response) => {
        const genresMap = {};
        response.data.genres.forEach((genre) => {
          genresMap[genre.id] = genre.name;
        });
        setGenres(genresMap);
      })
      .catch((error) => console.error(error));
  }, []);

  function formatWords(input) {
    const words = input.split(" ");
    const formattedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });
    return formattedWords.join(" ");
  }

  const SearchMovies = async (title) => {
    let formattedTitle = formatWords(title);
    let displayTitle = formattedTitle.replace(/\s/g, "+");

    setSection("Top Rated");

    // Top - Rated
    let Query = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    if (title) {
      setSection(`Results for ${formattedTitle}`);

      Query = `https://api.themoviedb.org/3/search/movie?query=${displayTitle}&api_key=${apiKey}`;
    }

    axios
      .get(Query)
      .then((response) => {
        console.log("\n --> Searched Movies : ", response.data.results); // Log the fetched data
        setMovie(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center m-5 p-5">Movies Library</h1>

      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchTitle}
          placeholder="Search For Movies"
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              SearchMovies(searchTitle);
            }
          }}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border rounded-lg py-2 px-4 w-1/2 md:w-1/3 lg:w-1/4"
        />

        <button
          alt="Search"
          className="m-2"
          onClick={() => SearchMovies(searchTitle)}
        >
          Search
        </button>
      </div>

      <h2 className="text-4xl font-bold text-center p-4 pb-0 m-4 mb-0 text-orange-500">
        {section}
      </h2>

      {movie.map((movie) => (
        <li key={movie.id} className="list-none">
          <Movie myData={movie} genres={genres} apiKey={apiKey} />
        </li>
      ))}
    </>
  );
}
