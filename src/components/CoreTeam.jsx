import React from "react";
import ChromaGrid from "./ChromaGrid";

function CoreTeam() {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Pratik Dave",
      subtitle: "President",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Aryaman Jha",
      subtitle: "general secretary",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Jenil Kumbhani",
      subtitle: "Treasurer",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Dhiraj Jadhav",
      subtitle: "Vice President",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
  ];

  return (
    // 1. The main container is back to its original state (no 'relative' needed)
    <div className="coreteam w-screen flex flex-col mt-20">
      {/* The Chroma Grid section has no SVG background */}
      <div className="md:h-auto  flex-col flex z-10 border-white border-2 rounded-lg mx-auto md:mt-10 mb-20 backdrop-blur-md shadow-xl">
        <h1 className="text-white mx-auto font-bold text-3xl pt-3">Core team</h1>

        <div className="md:justify-center flex-row items-center flex pt-6 pb-3 px-4" style={{ height: "100%", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={500}
            damping={0}
            fadeOut={2}
            ease="power2.easeOut"
          />
        </div>
      </div>

      <div className="relative p-3 z-10  grid md:grid-cols-2 gap-2 items-center md:py-10 md:px-20  m-auto ">
        
        <div className="absolute inset-0 z-0 w-full h-full opacity-90">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="lines" patternUnits="userSpaceOnUse" width="100" height="100">
                    <path d="M-50 50 L50 0 L150 50" stroke="rgba(100, 116, 139, 0.4)" strokeWidth="1" fill="none" />
                    <path d="M0 100 L100 0" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="1" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#lines)" />
            </svg>
        </div>

        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Unleashing the Potential of Budding Technocrats
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            ABIT (Association of Budding Information Technocrats) is dedicated to providing a platform for students to develop and enhance their technical and soft skills.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex sm:flex-col-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-white">Our mission</h2>
              <p className="text-gray-400">
                To be a catalyst for growth and innovation in the IT industry.
              </p>
              <button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                Explore Us
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-white">Our Values</h2>
              <p className="text-gray-400">
                Integrity, Excellence, Collaboration and Continuous Learning.
              </p>
              <button className="bg-black/20 border mt-6 border-white/20 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                Our mentors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreTeam;