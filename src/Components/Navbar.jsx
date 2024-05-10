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

            {/* Your details in the center */}
        <div className="text-center flex-shrink-0">
          <span className="text-white">Your Name</span>
          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-gray-300 mx-4"
          >
            your.email@example.com
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 mx-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 mx-4"
          >
            LinkedIn
          </a>
        </div>
        {/* End of your details */}

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
