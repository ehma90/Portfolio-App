import {Link} from 'react-router-dom'

function NonFound() {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center text-center gap-6 text-xl md:text-[40px]'>
      <h2 className='font-bold my-3'>Oops</h2>
      <p >Page Not Found</p>
      <Link to="/" className='text-white px-12 py-8 bg-green-900 rounded'>
      Go back
      </Link>
    </div>
  );
}

export default NonFound;

