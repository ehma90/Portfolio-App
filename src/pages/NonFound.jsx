import {Link} from 'react-router-dom'

function NonFound() {
  return (
    <div className='flex items-center justify-center text-center text-[40px]'>
      <Link to='/'>
      <h2 className='font-bold'>Oops</h2>
      <p>Page Not Found</p>
      </Link>
    </div>
  );
}

export default NonFound;

