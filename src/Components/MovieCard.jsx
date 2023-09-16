import { useState, useEffect } from "react";
import axios from "axios";
// import MovieTrailer from "./MovieTrailer";
// import VideoModal from "./VideoModal";
import VideoPopup from "./VideoPopup";

const formatRating = (rating) => {
  const formattedRating = rating.toFixed(2);
  const lastChar = formattedRating.charAt(formattedRating.length - 1);

  if (lastChar === "0" || lastChar === ".") {
    return formattedRating.slice(0, -1);
  }

  return formattedRating;
};

// export default function Movie({ myData, genres, apiKey })

export default function Movie({ myData, genres, apiKey }) {
  const releaseYear = new Date(myData.release_date).getFullYear();
  const Rating = formatRating(myData.vote_average);

  // const [isClick, setIsClick] = useState(false);

  const [trailerKey, setTrailerKey] = useState("");
  const API_URL = `http://api.themoviedb.org/3/movie/${myData.id}/videos?api_key=${apiKey}`;

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(API_URL);

        // Assuming the first result is the trailer, you can customize this logic.
        if (response.data.results.length > 0) {
          setTrailerKey(response.data.results[0].key);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  });

  return (
    <div className="Movie">
      <div className="flex flex-wrap flex--movie p-4 justify-center items-center">
        {/* Image  */}
        <div className="w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
          <div className="md:flex-shrink-0">
            <img
              className="md:w-56"
              // src={
              //   myData.poster_path !== "N/A"
              // ? img_path
              //     : "https://via.placeholder.com/400"
              // }
              // alt={myData.Title}

              src={
                myData.poster_path
                  ? `https://image.tmdb.org/t/p/w500${myData.poster_path}`
                  : "https://via.placeholder.com/400"
              }
              alt={`${myData.title} Poster`}
            />
          </div>

          <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
            {/* Title  */}
            <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
              {myData.title}
            </h3>

            {/* Year and Type */}
            <span className="font-bold text-justify text-gray-400 movie--type">
              {/* {myData.Year} <br /> */}
              {/* {myData.Type.toUpperCase()} */}
              {releaseYear ? releaseYear : "N/A"} <br />
              Rating : {Rating} <br />
              Genre : {myData.genre_ids.map((id) => genres[id]).join(", ")}
            </span>

            {/* Synopsis  */}
            <div className="flex-grow text-justify mt-4">{myData.overview}</div>

            {/* Buttons  */}
            <div className="button-container flex justify-between">
              {/* <button onClick={() => {
                setIsClick(true);
              }}>More Info</button> */}

              {/* <VideoModal /> */}

              <VideoPopup title={myData.title} trailerKey={trailerKey} />

              <button className="bg-orange-200 text-orange-700">
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {isClick && <VideoModal isOpen={isClick} /> } */}
      {/* {isClick && <MovieTrailer movieId={myData.id} apiKey={apiKey} /> } */}
    </div>
  );
}
