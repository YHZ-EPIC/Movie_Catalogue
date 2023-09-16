import { useState, useEffect } from "react";
import Movie from "./Components/Movie";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=3b727a19";

export default function App() {
  const [movie, setMovie] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    SearchMovies("Thor");
  }, []);

  const SearchMovies = async (title) => {
    await fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.Search))
      .catch((error) => console.error("\n --> Error Fetching Movies", error));
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center p-5">Movies Library</h1>

      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchTitle}
          placeholder="Search Any Movie"
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

      {/* Render All Movie Cards using Map Function */}
      {movie?.length > 0 ? (
        movie.map((movie) => (
          <li key={movie.imdbID} className="list-none">
            <Movie myData={movie} />
          </li>
        ))
      ) : (
        <h1 className="text-3xl font-bold text-center p-5">
          {" "}
          No Movies Found{" "}
        </h1>
      )}
    </>
  );
}
