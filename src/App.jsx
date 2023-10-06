import Home from "./Components/Home";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// TMDB API
const apiKey = import.meta.env.VITE_API_KEY;

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

export default function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (item) => {
    // Check if the item already exists in the watchList
    const itemExists = watchList.some(
      (existingItem) => existingItem.id === item.id
    );

    if (!itemExists) {
      // If it doesn't exist, add it to the watchList
      setWatchList([...watchList, item]);
    } else {
      // Handle duplicate items
      console.log("\n --> " + item.title + " is already in the Watch List.");
    }
  };

  const updateList = (updatedItems) => {
    setWatchList(updatedItems);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home apiKey={apiKey} sendDataToParent={handleAddToWatchList} />
            }
          />
          <Route
            path="/list"
            element={<WatchList favorites={watchList} onChange={updateList} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}
