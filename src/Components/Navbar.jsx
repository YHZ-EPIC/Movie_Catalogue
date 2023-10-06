import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-xl p-1.5 m-0.5 font-semibold text-white">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img
            alt="Home"
            title="Home"
            src="./vite.svg"
            className="w-12 h-12 mb-1"
          />
        </NavLink>

        <div className="space-x-4">
          <NavLink
            to="/"
            className="text-white hover:text-gray-300"
            activeclassname="font-bold"
          >
            Home
          </NavLink>

          <NavLink to="/list" className="hover:text-gray-300">
            Watch List
          </NavLink>

          {/* <NavLink to="/about" className=" hover:text-gray-300">
            About
          </NavLink>
          <NavLink to="/contact" className=" hover:text-gray-300">
            Contact
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
}
