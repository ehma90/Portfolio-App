import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='container mt-9'>
      <nav className='text-end'>
      <NavLink to='/'>
          <a href="#" className='text-lg md:text-xl mx-3 hover:text-green-900'>Home</a>
        </NavLink>
        <NavLink to='/projects'>
          <a href="#" className='text-lg md:text-xl mx-3 hover:text-green-900'>Project</a>
        </NavLink>
        <NavLink to='/resume'>
          <a href="#" className='text-lg md:text-xl mx-3 hover:text-green-900'>Resume</a>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
