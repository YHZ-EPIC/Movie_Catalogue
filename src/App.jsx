import { useState, useEffect } from "react";
import Movie from "./Components/movie";
// import SearchIcon from "./assets/search.svg";
// import { useEffect } from "react";
// import Moviez from "./Components/testing"

// OMDB API
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3b727a19";

// const myData = [
//   {
//   "Title": "Guardians of the Galaxy Vol. 2",
//   "ID" : 1,
//   "Year": "2017",
//   "Rated": "PG-13",
//   "Released": "05 May 2017",
//   Poster : "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//   },
//   {
//     "Title": "Batman Begins",
//     "ID" : 2,
//     "Year": "2005",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
//   }
// ]

export default function App() {
  const [movie, setMovie] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // useEffect(() => {
  //   if(searchTitle)
  //   {
  //     fetch(`${API_URL}&s=${searchTitle}`)
  //     .then(response => response.json())
  //     .then(data => setmovie(data.Search))
  //     .catch(error => console.error('Error fetching movies:', error));
  //   }
  // },[searchTitle])

  useEffect(() => {
    SearchMovies("Thor");
  },[]);

  const SearchMovies = async (title) => {
    await fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((data) => setMovie(data.Search))
      .catch((error) => console.error("\n --> Error Fetching Movies", error));
  };

  console.log(movie);
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-5">Movies Library</h1>

      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchTitle}
          placeholder="Search Any Movie"
          className="border rounded-lg py-2 px-4 w-1/2 md:w-1/3 lg:w-1/4"
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <button
          className="m-2"
          alt="Search"
          onClick={() => SearchMovies(searchTitle)}
        >
          Search
        </button>
      </div>

      {/* <div>
          <img src={myData.Poster !== 'N/A' ? myData.Poster : 'https://via.placeholder.com/400'} alt = {myData.Title} />
        </div> */}

      {/* Render All Movie Card using Map Function  */}
      {movie?.length > 0 ? (
        movie.map((movie) => (
          <li key={movie.imdbID} className="list-none">
              <Movie myData={movie} />
          </li>
        ))
      ) : (
        <h1 className="text-3xl font-bold text-center p-5"> No Movie Found </h1>
      )}

      {/* {movie.length > 0 && (
         <div className="p-4">
          <Movie myData={movie[0]} />
       </div>
      )} */}

      {/* <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <Movie myData={myData} />
        </div>
        <div className="p-4">
          <Movie myData={myData} />
        </div>
      </div> */}
    </>
  );
}
