/* eslint-disable react/prop-types */
const formatRating = (rating) => {
  const formattedRating = rating.toFixed(2);
  const lastChar = formattedRating.charAt(formattedRating.length - 1);

  if (lastChar === "0" || lastChar === ".") {
    return formattedRating.slice(0, -1);
  }

  return formattedRating;
};

export default function Movie({ myData, genres, trailer }) {
  const releaseYear = new Date(myData.release_date).getFullYear();
  // const Rating = myData.vote_average.toFixed(2);
  const Rating = formatRating(myData.vote_average);
  // console.log("\n Rating : ", Rating);

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
              Genre : {myData.genre_ids.map(id => genres[id]).join(', ')}
            </span>

            {/* Synopsis  */}
            <div className="flex-grow text-justify mt-4">{myData.overview}</div>

            {/* Buttons  */}
            <div className="button-container flex justify-between">
              <button onClick={() => trailer}>
                More Info
              </button>
              <button className="bg-orange-200 text-orange-700">
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
