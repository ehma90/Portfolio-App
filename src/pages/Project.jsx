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

          <ul className="py-[16px] md:py-[48px] flex justify-start gap-x-[8px] opacity-50">
            {card.stack.map(item => (
              <li key={item.id} className="m-0 py-[4px] px-[8px] md:py-[8px] md:px-[16px] text-[12px] md:text-[14px] font-medium border border-green-900 rounded-full list-none">{item}</li>
            ))}
          </ul>

          <p className="project-text">{card.text}</p>


          <div className="flex justify-between text-[18px] max-w-[960px] w-full mx-auto">
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
