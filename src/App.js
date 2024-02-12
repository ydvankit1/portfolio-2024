
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./containers/home";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
//import Particles from 'react-tsparticles';
//import particles from './utils.js/particles';
//import { loadFull } from 'tsparticles';
function App() {
  // const handleInit=async(main)=>{
  //   await loadFull(main)
  // }
  return (
    <div className="App">
      {/* particle js */}
      {/* <Particles id ="particles" options ={ particles} init={handleInit}/> */}
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}
export default App;