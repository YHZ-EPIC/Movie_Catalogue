export default function Movie({ myData }) {
  return (
    <div className="Movie">
      <div className="flex flex-wrap flex--movie p-4 justify-center items-center">
        {/* Image  */}
        <div className="w-full md:w-full max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
          <div className="md:flex-shrink-0">
            <img
              className="md:w-56"
              src={
                myData.Poster !== "N/A"
                  ? myData.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={myData.Title}
            />
          </div>

          <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
            {/* Title  */}
            <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
              {myData.Title}
            </h3>

            {/* Year and Type */}
            <span className="font-bold text-lg lg:text-sm lg:mb-4 text-gray-400 movie--type">
              {myData.Year} <br />
              {myData.Type.toUpperCase()}
            </span>

            {/* Synopsis  */}
            <div className="flex-grow">
              <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
                {
                  "Explore Hollywood's Realm of Captivating Stories, Spanning Genres from Action Packed Adventures to Heartfelt Romances, Sci-fi Wonders to Thought-Provoking Dramas. With Diverse Characters Navigating Challenges and Growth, these Films Entertain, Inspire, and Transport Audiences to Imaginary Worlds."
                }
              </p>
            </div>

            {/* Buttons  */}
            <div className="button-container flex justify-between">
              <button>More Info</button>
              <button className="bg-orange-200 text-orange-700">
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
