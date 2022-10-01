import About from "./About.jsx";
import { RiMailSendLine } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { BsGithub, BsArrowDown } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

function Hero() {
  return (
    <div className="my-[150px]">
      <h1 className="text-4xl md:text-6xl my-4 mb:my-5 font-extralight"><span className="font-bold">Emmanuel</span> Essien</h1>
      <p className="font-medium text-lg md:text-2xl">Software Developer & Content Writer</p>
      <div className="shadow-lg shadow-green-900/50 mx-auto absolute w-[185px] border border-green-900"></div>
      <About/>
    </div>
  );
}

export default Hero;
