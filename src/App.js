import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Div100vh from "react-div-100vh";
import Navbar from "./components/Navbar.js";
import gearImage from "./assets/icons/gear.png";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Events from "./pages/Events.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Team.js";

export default function App() {
  const generateXPosition = () => {
    return `${Math.floor(Math.random() * 98)}%`;
  };
  const generateYPosition = () => {
    return `${Math.floor(Math.random() * 98)}%`;
  };
  const [loading, setLoading] = useState(true);
  const [loadingRemoved, removeLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      removeLoading(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (loadingRemoved) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loadingRemoved]);

  return (
    <BrowserRouter>
      <Div100vh className="relative w-full overflow-y-hidden">
        {loading && (
          <div className={`w-full h-full gradient flex justify-center items-center flex-col gap-3 absolute top-0 left-0 z-50 duration-[2s] ${loadingRemoved ? "opacity-0" : "opacity-100"}`}>
            <div className={`${loadingRemoved ? "scale-0" : "scale-100"} duration-500`}>
              <div className="flex justify-center items-center">
                <img src={gearImage} alt="tools" className="background-gear-2" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-3" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-2" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-3" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-2" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-3" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-2" />
                <img src={gearImage} alt="tools" className="-ml-1 background-gear-3" />
              </div>
              <h1 className="basica text-[40px] tracking-widest text-[#FFffff90]">
                MED
                <span className="text-[27px]">EXTROUS</span>
              </h1>
            </div>
          </div>
        )}
        <Navbar />
        <Div100vh className="bg-black flex justify-center items-center overflow-hidden">
          <div className="gradient w-full min-w-[1400px] h-full min-h-[1400px] relative overflow-hidden">
            {[...Array(450)].map((_, i) => (
              <img key={i} src={gearImage} alt="tools" className="absolute w-[20px] opacity-50 background-gear" style={{ top: generateYPosition(), left: generateXPosition() }} />
            ))}
          </div>
        </Div100vh>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Div100vh>
    </BrowserRouter>
  );
}
