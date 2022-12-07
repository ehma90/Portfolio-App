import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container my-6">
      <nav className=" flex justify-center md:justify-end">
        <NavLink to="/">
          <p className="text-lg md:text-xl mx-3 hover:text-green-900 hover:underline decoration-1">
            Home
          </p>
        </NavLink>
        <NavLink to="/projects">
          <p className="text-lg md:text-xl mx-3 hover:text-green-900 hover:underline decoration-1">
            Projects
          </p>
        </NavLink>
        <NavLink to="/resume">
          <p className="text-lg md:text-xl mx-3 hover:text-green-900 hover:underline decoration-1">
            Resume
          </p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
