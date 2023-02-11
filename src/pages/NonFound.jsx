import {Link} from 'react-router-dom'

function NonFound() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center text-center text-xl md:text-[40px]'>
      <h2 className='font-bold my-3'>Oops</h2>
      <p>Page Not Found</p>
    </div>
  );
}

export default NonFound;

