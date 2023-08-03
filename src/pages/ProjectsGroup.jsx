import ProjectCard from "../Component/Projects/ProjectCard";
import { FaLaptopCode } from "react-icons/fa";


function ProjectsGroup({ PortData }) {
  return (
    <div className="flex-col px-10 md:px-0 overflow-x-hidden">
      <div
        className="my-[100px]"
        data-aos="zoom-out-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl md:text-6xl my-2 md:my-4 mb:my-5 font-extralight">
          <span className="font-bold">Emmanuel</span> Essien
        </h1>
        <p className="font-medium text-md md:text-2xl">Software Engineer</p>
        <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[115px] md:w-[171px] border border-green-900"></div>
      </div>

      <h2 className="font-medium text-xl text-green-900 ">
        Developed Projects:
      </h2>

      <div className="mt-6 mb-[50px]">
        <ProjectCard PortDatas={PortData} />
      </div>


      <div className=" flex justify-center">
        <FaLaptopCode className="text-green-900 text-4xl" />
      </div>
    </div>
  );
}

export default ProjectsGroup;
