import WatchListCard from "./WatchListCard";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function WatchList({ favorites, onChange }) {
  // Using State to hold Favourites so that
  // Upon Removal of Item, Child Component Updates Accordingly

  const [items, setItems] = useState(favorites);
  const [isRemoved, setIsRemoved] = useState(false);

  const Verify = items && items.length > 0;

  useEffect(() => {
    if (isRemoved) {
      setTimeout(() => {
        setIsRemoved(false);
      }, 800); // Auto-Close Popup
    }
  }, [isRemoved]);

  // Function to remove an item from the array
  const removeItem = (itemToRemove) => {
    // Update the state with the modified array
    const updatedItems = items.filter((item) => item.id !== itemToRemove.id);
    setItems(updatedItems);
    onChange(updatedItems);
    setIsRemoved(true);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center p-4 pb-0 m-4 mb-0 text-orange-500">
        Personal Watch List
      </h1>
      <div
        className={`fixed top-0 right-0 mt-6 mr-6 bg-blue-500 text-white p-3 rounded shadow-md ${
          isRemoved ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transform transition-opacity duration-300 ease-in-out`}
      >
        Removed Successfully
      </div>
      {Verify ? (
        <div className="flex justify-center items-center flex-wrap m-5 p-5">
          {items.map((movie) => (
            <li key={movie.id} className="list-none">
              <WatchListCard favorites={movie} onRemove={removeItem} />
            </li>
          ))}
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center flex-wrap m-3 p-5 text-bold text-2xl">
            Kindly Add Movies to Watch List
          </div>
          <div className="flex justify-center items-center flex-wrap  text-bold text-2xl">
            <button>
              <NavLink
                to="/"
                className="text-white hover:text-gray-300"
                activeclassname="font-bold"
              >
                Go Back to Home
              </NavLink>
            </button>
          </div>
        </>
      )}
    </>
  );
}
