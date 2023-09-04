/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function MovieTrailer({ movieId, apiKey }) {
  const [trailerKey, setTrailerKey] = useState("");
  const API_URL = `http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

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

  // console.log("\n Movie Trailer : ", trailerKey);

  return (
    <div className="flex flex-wrap flex--movie p-4 justify-center items-center">
      {trailerKey && (
        <iframe
          allowFullScreen
          title="Movie Trailer"
          src={
            trailerKey
              ? `https://www.youtube.com/embed/${trailerKey}`
              : "https://via.placeholder.com/400"
          }
          // src={`https://www.youtube.com/embed/${trailerKey}`}
          // style={{
          //   width: "1920px",
          //   height: "1080px",
          // }}

          className="w-full aspect-video"
        ></iframe>
      )}
    </div>
  );
}

export default MovieTrailer;
