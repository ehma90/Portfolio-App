import { useParams, Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import {TbArrowNarrowLeft} from 'react-icons/tb'
import {BsLink45Deg} from 'react-icons/bs'
import "../../style/project.css";

function Project({ PortData }) {
  const { header } = useParams();
  return (
    <div className="container mx-auto">
      
      {PortData.filter((card) => card.header === header).map((card) => (
        <div key={card.id} className="project-container">
          <div className="project-img">
            <img src={card.image} alt={card.header} className="rounded-md" />
          </div>

          <h1 className="project-header">{card.header}</h1>

          <p className="project-text">{card.text}</p>

          <div className="flex justify-between md:w-[960px] md:mx-auto">
            <a href={card.link} className="toGithub">
              <AiFillGithub className="mr-2" />Github link
            </a>
            
            <a href={card.deploy} className='liveLink'><BsLink45Deg className="mr-2"/> See Live</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
