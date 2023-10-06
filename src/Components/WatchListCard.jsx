const formatRating = (rating) => {
  const formattedRating = rating.toFixed(2);
  const lastChar = formattedRating.charAt(formattedRating.length - 1);

  if (lastChar === "0" || lastChar === ".") {
    return formattedRating.slice(0, -1);
  }

  return formattedRating;
};
export default function WatchListCard({ favorites, onRemove }) {
  const releaseYear = new Date(favorites.release_date).getFullYear();
  const Rating = formatRating(favorites.vote_average);

  return (
    <>
      <div className="Movie">
        <div className="flex flex-wrap flex--movie p-4 justify-center items-center">
          {/* Image  */}
          <div className="w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
            <div className="md:flex-shrink-0">
              <img
                className="md:w-56"
                src={
                  favorites.poster_path
                    ? `https://image.tmdb.org/t/p/w500${favorites.poster_path}`
                    : "https://via.placeholder.com/400"
                }
                alt={`${favorites.title} Poster`}
              />
            </div>

            <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
              {/* Title  */}
              <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
                {favorites.title}
              </h3>

              {/* Year and Type */}
              <span className="font-bold text-justify text-gray-400 movie--type">
                {releaseYear ? releaseYear : "N/A"} <br />
                Rating : {Rating} <br />
                {/* Genre : {favorites.genre_ids.map((id) => genres[id]).join(", ")} */}
              </span>

              {/* Synopsis  */}
              <div className="flex-grow text-justify mt-4">
                {favorites.overview}
              </div>

              <button
                className="bg-orange-200 text-orange-700"
                onClick={() => onRemove(favorites)}
              >
                Remove From Watch List
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
