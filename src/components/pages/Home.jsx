// Home.js
import React, { useRef, useState, useEffect } from "react";
import Canvas from "../../Canvas";
import data from "../../data";
import Work from "../Work";
import Contact from "../contact";

const Home = ({ showCanvas, setShowCanvas, headingref, growingSpan }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  

  return (
    <>
      <span ref={growingSpan} className="growing rounded-full block top-0 left-0 w-5 h-5"></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas && data[0].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <div className="w-full relative z-[2] h-screen text-white">
          
          <div className="text_container w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.1]">
                Experience Photography with a Personal Touch
              </h3>
              <p className="text-lg font-normal w-[80%] mt-10">
                Our aim is simple: to bring your vision to life and create stunning images that resonate...
              </p>
              <p className="mt-10 text-md ">Scroll</p>
            </div>
          </div>

          <div className="w-full pb-24 absolute bottom-0 left-0">
            <h1 ref={headingref} className="pl-0 cursor-pointer text-[14rem] font-normal tracking-tight leading-none">
              LensCraft Studio
            </h1>
            
          </div>
        
        </div>
      </div>

      <div className="w-full relative mt-32 px-10 animate-fadeIn">
        {showCanvas && data[1].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <div className="relative z-[3] animate-fadeIn">
          <h1 className="text-6xl tracking-tighter animate-pulse">Welcome to LensCraft Studio!</h1>
          <p className="text-2xl leading-[1.8] w-[80%] mt-10 font-light animate-pulse">
            At LensCraft Studio, we believe every moment is worth capturing...
          </p>
        </div>
      </div>

      <div className="w-full relative mt-32 px-10">
        {showCanvas && data[2].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <Work />
      </div>

      <div className="contact w-full relative z-[] mt-32 px-10">
        {showCanvas && data[3].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <Contact />
      </div>

      <div className="pl-5 pt-28 font-['Helvetica_Now_Display'] relative z-[2] pb-0 ">
        {/* {showCanvas && data[4].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)} */}
        <h1 className="text-7xl">Capture today, cherish tomorrow.</h1>
        <span className="text-7xl">Let us create lasting memories together.</span>
      </div>
    </>
  );
};

export default Home;
