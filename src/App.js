import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/pages/Hero.jsx";
import NonFound from "./Component/pages/NonFound.jsx";
import Projects from "./Component/pages/Projects.jsx";
import Project from "./Component/pages/Project.jsx";
import Resume from "./Component/pages/Resume.jsx";
import PorfolioData  from "./data/PorfolioData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState} from 'react'

function App() {
  const [data] = useState(PorfolioData)

  return (
    <Router>
      <div className="container mx-auto px-10 h-screen">
        <Navbar />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects PortData={data}/>} />
            <Route path="/projects/:header" element={<Project PortData={data}/>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NonFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
