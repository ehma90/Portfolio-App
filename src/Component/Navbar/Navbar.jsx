import { NavLink } from "react-router-dom";
import {useLocation } from 'react-router-dom'

function Navbar() {
  const router = useLocation()
  const {pathname} = router;
  const splitLocation = pathname.split("/");


  return (
    <div className="container my-6">
      <nav className=" flex justify-center  md:justify-end gap-x-8">
        <NavLink to="/">
          <p className={splitLocation[1] === '' ? 'text-lg md:text-xl text-green-900 border-b border-green-900 decoration-1' : 'text-lg md:text-xl'} >
            Home
          </p>
        </NavLink>
        <NavLink to="/projects">
          <p className={splitLocation[1] === 'projects' ? 'text-lg md:text-xl text-green-900 border-b border-green-900 decoration-1' : 'text-lg md:text-xl'}>
            Projects
          </p>
        </NavLink>
        <NavLink to="/resume">
          <p className={splitLocation[1] === 'resume' ? 'text-lg md:text-xl text-green-900 border-b border-green-900 decoration-1' : 'text-lg md:text-xl'}>
            Resume
          </p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
