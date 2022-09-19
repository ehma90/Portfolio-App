import './Hero.css'
import {RiMailSendLine} from 'react-icons/ri'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub, BsArrowDown} from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'

function Hero() {
  return (
    <div className='hero mx-auto'>
      <p>Hey, I'm</p>
      <h1 className='text-7xl my-7'>Emmanuel Essien</h1>
      <p className='text-lg'>A devoted developer who has a keen knowledge of front-end programming, having worked on some programming languages like  Html, CSS, and Javascript including frameworks like React.JS, Bootstrap, and Tailwind CSS. Acquiring this knowledge with the help of web applications like Udemy, Youtube, and FreeCodeCamp. My self-taught ability drives my adaptability, communication, leadership, teamwork, and problem-solving skills.</p>
      
      <div className="hero-btns">
          <a href='#' className= "hero-btn">
            <RiMailSendLine className='mx-2'/> Send an email
          </a>
          <a href='#' className= "hero-btn">
            <ImLinkedin className='mx-2'/> LinkedIn
          </a>
          <a href='#' className= "hero-btn">
            <BsGithub className='mx-2'/> Github
          </a>
          <a href='#' className= "hero-btn">
            <SiUpwork className='mx-2 text-lg'/> Upwork
          </a>
      </div>

      <div className='arrow'>
        <BsArrowDown className='bounce'/>
      </div>
      
    </div>
  );
}

export default Hero;
