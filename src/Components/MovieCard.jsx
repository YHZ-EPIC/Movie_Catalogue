import { useState, useEffect } from "react";
import axios from "axios";
import VideoPopup from "./VideoPopup";

const formatRating = (rating) => {
  const formattedRating = rating.toFixed(2);
  const lastChar = formattedRating.charAt(formattedRating.length - 1);

  if (lastChar === "0" || lastChar === ".") {
    return formattedRating.slice(0, -1);
  }

  return formattedRating;
};

export default function Movie({ myData, genres, apiKey, onClick }) {
  const API_URL = `https://api.themoviedb.org/3/movie/${myData.id}/videos?api_key=${apiKey}`;
  const releaseYear = new Date(myData.release_date).getFullYear();
  const Rating = formatRating(myData.vote_average);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        if (response.data.results.length > 0) {
          setTrailerKey(response.data.results[0].key);
        }
      })
      .catch((error) =>
        console.error("Error Fetching Video Trailer : ", error)
      );
  }, [API_URL]);

  return (
    // <div className="Movie">
    //   <div className="flex flex-wrap flex--movie p-4 justify-center items-center">
    //     {/* Image  */}
    //     <div className="w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
    //       <div className="md:flex-shrink-0">
    //         <img
    //           className="w-full md:max-w-md"
    //           src={
    //             myData.poster_path
    //               ? `https://image.tmdb.org/t/p/w500${myData.poster_path}`
    //               : "https://via.placeholder.com/400"
    //           }
    //           alt={`${myData.title} Poster`}
    //         />
    //       </div>

    //       <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
    //         {/* Title  */}
    //         <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
    //           {myData.title}
    //         </h3>

    //         {/* Year and Type */}
    //         <span className="font-bold text-justify text-gray-400 movie--type">
    //           {releaseYear ? releaseYear : "N/A"} <br />
    //           Rating : {Rating} <br />
    //           Genre : {myData.genre_ids.map((id) => genres[id]).join(", ")}
    //         </span>

    //         {/* Synopsis  */}
    //         <div className="flex-grow text-justify mt-4">{myData.overview}</div>

    //         {/* Buttons  */}
    //         <div className="button-container flex justify-between">
    //           <VideoPopup title={myData.title} videoKey={trailerKey} />

    //           <button
    //             className="bg-orange-200 text-orange-700"
    //             onClick={() => onClick(myData)}
    //           >
    //             Add to Watch List
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="Movie">
  <div className="flex flex-wrap flex--movie p-4 justify-center items-center">
    {/* Image and Text Container */}
    <div className="w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex flex-col md:flex-row">
      {/* Poster */}
      <div className="md:flex-shrink-0 md:order-1">
        <img
          className="w-full h-auto md:max-w-md max-w-full"
          src={
            myData.poster_path
              ? `https://image.tmdb.org/t/p/w500${myData.poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt={`${myData.title} Poster`}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333 md:order-2">
        {/* Title */}
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
          {myData.title}
        </h3>

        {/* Year and Type */}
        <span className="font-bold text-justify text-gray-400 movie--type">
          {releaseYear ? releaseYear : "N/A"} <br />
          Rating : {Rating} <br />
          Genre : {myData.genre_ids.map((id) => genres[id]).join(", ")}
        </span>

        {/* Synopsis */}
        <div className="flex-grow text-justify mt-4">{myData.overview}</div>

        {/* Buttons */}
        <div className="button-container flex justify-between mt-4">
          <VideoPopup title={myData.title} videoKey={trailerKey} />
          <button
            className="bg-orange-200 text-orange-700"
            onClick={() => onClick(myData)}
          >
            Add to Watch List
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
