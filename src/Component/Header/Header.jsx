import './Header.css'

function Header() {
  return (
    <div className='header mt-12'>
      <nav className='navBar'>
        <strong>Welcome</strong>
        <div className='navLink'>
          <a href="#" className='text-lg mx-4'>Project</a>
          <a href="#" className='text-lg mx-4'>Resume</a>
          <a href="#" className='text-lg ml-4'>Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
