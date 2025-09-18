import React from 'react'
import banner from "../assets/banner.png";
function HeroSection() {
  return (
    <>
    <div className="info flex md:h-[80vh] w-screen flex-col md:flex-row md:p-12 pt-12 ">
        <div className="left md:h-[80vh]  md:w-1/2 w-full flex flex-col md::justify-center md:px-8  text-white">
          <div className="bg-black/60 p-6 rounded-lg">
            <h1 className="text-4xl md:text-6xl md:font-extrabold font-bold leading-tight  drop-shadow-lg">
              Empowering IT students
              <br />
              to reach their potential
            </h1>
            <p className="text-lg md:bg-black/30 md:text-xl rounded-3xl backdrop-blur-2xl p-6 md:p-2 md:mt-12 mt-3 md:font-bold drop-shadow">
              ABIT is a dynamic departmental committee that provides a platform
              for IT students to develop technical and soft skills, enabling
              them to excel in their chosen fields.
            </p>
          </div>
        </div>
        <div className="right flex w-full h-[20vh] p-10 justify-center md:items-center md:h-[80vh] md:w-1/2 md:pl-10 text-white">
          <img src={banner} alt="abit logo" className='size-fit md:size-fit'/>
        </div>
      </div>
      </>
  )
}

export default HeroSection
