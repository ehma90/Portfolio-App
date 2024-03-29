import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProjectsGroup from "./pages/ProjectsGroup.jsx";
import Project from "./pages/Project.jsx";
import Resume from "./pages/Resume.jsx";
import PorfolioData  from "./data/PorfolioData";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'

function App() {
  const [data] = useState(PorfolioData)
  AOS.init();
  
  return (
      <Router>
      <div className="container mx-auto px-0 md:px-[10%]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<ProjectsGroup PortData={data}/>} />
            <Route path="/projects/:slug" element={<Project PortData={data}/>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
