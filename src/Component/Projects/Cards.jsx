
import {AiFillGithub} from 'react-icons/ai'

function Cards({items}) {
  return (
      <div className="card w-50 bg-base-100 shadow-xl">
        <figure className=" w-full rounded-b-none">
          <img
            src={items.image}
            alt="Shoes"
            className="rounded-lg rounded-b-none"
          />
        </figure>

        <div className="card-body items-center px-4">
          <a href={items.deploy}>
            <h2 className="card-title mt-3 mb-3 underline decoration-1 hover:no-underline">{items.header}</h2>
          </a>
          
          <p className='mb-6 text-sm'>{items.text}</p>
          <a href={items.link} className="card-actions mt-4">
            <button className="w-30 md:w-40 btn btn-primary flex items-center"><AiFillGithub className='mr-2 '/> Github repo</button>
          </a>
        </div>
      </div>
  );
}

export default Cards;
