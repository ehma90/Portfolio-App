import { useState } from "react";
import { NavLink } from "react-router-dom";
// import useLocalStorage from 'use-local-storage'

function Navbar() {
  const [border, setborder] = useState('home')

  return (
    <div className="container my-6">
      <nav className=" flex justify-end  md:justify-end gap-x-8">
        <NavLink to="/" onClick={() => setborder('home')}>
          <p className={border === 'home' ? 'text-lg md:text-xl text-green-900 underline decoration-1' : 'text-lg md:text-xl'} >
            Home
          </p>
        </NavLink>
        <NavLink to="/projects" onClick={() => setborder('projects')}>
          <p className={border === 'projects' ? 'text-lg md:text-xl text-green-900 underline decoration-1' : 'text-lg md:text-xl'}>
            Projects
          </p>
        </NavLink>
        <NavLink to="/resume" onClick={() => setborder('resume')}>
          <p className={border === 'resume' ? 'text-lg md:text-xl text-green-900 underline decoration-1' : 'text-lg md:text-xl'}>
            Resume
          </p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
