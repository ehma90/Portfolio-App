import { useParams } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { BsLink45Deg } from "react-icons/bs";
import "../style/project.css";

function Project({ PortData }) {
  const { header } = useParams();

  return (
    <div className="container mx-auto px-10 md:px-0">
      {PortData.filter((card) => card.header === header).map((card) => (
        <div key={card.id} className="project-container">
          <h1 className="project-header">{card.header}</h1>
          <div className="project-img">
            <img src={card.image} alt={card.header} className="rounded-md" />
          </div>


          <p className="project-text">{card.text}</p>

          {card.functions && (
            <div>
              <h4 className="font-medium text-xl mb-2 text-green-900">Functionalities</h4>
              <ul className="functions">
              {card.functions.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
            </div>
          )}

          <div className="flex justify-between max-w-[960px] w-full mx-auto">
            <a href={card.link} className="toGithub">
              <AiFillGithub className="mr-2" />
              Github link
            </a>

            <a href={card.deploy} className="liveLink">
              <BsLink45Deg className="mr-2" /> See Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
