import ProjectCard from "../Projects/ProjectCard";
import { FaLaptopCode} from "react-icons/fa"

function Projects({PortData}) {
  return (
    <div className="flex-col ">
      <div className="mb-[150px]">
        <h1 className="text-4xl md:text-6xl my-4 mb:my-5 font-extralight">
          <span className="font-bold">Emmanuel</span> Essien
        </h1>
        <p className="font-medium text-lg md:text-2xl">
          Software Developer & Content Writer
        </p>
        <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[150px] md:w-[225px] border border-green-900"></div>
      </div>
      <div className=" mb-[100px]">
          <ProjectCard PortDatas={PortData}/>
      </div>   

      <div className=" flex justify-center">
        <FaLaptopCode className="text-green-900 text-4xl"/>
      </div>
    </div>
  );
}

export default Projects;
