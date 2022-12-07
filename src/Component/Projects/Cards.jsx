import { Link } from "react-router-dom";
import "../../style/Card.css";

function Cards({ items }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={items.image} alt="cards" className="w-full" />
      </div>

      <div className="">
        <Link to={`/projects/${items.header}`} className='card-btn'>See Project</Link>
      </div>
    </div>
  );
}

export default Cards;
