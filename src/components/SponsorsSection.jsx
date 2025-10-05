import React from 'react';
import azent from '../assets/Azent.png';
import admitabroad from '../assets/admit.png';
import ats from '../assets/ATS.jpeg';

const SponsorsSection = () => {
  return (
    <div className="bg-black text-white font-sans px-4">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-16">

        {/* Sponsors Section */}
        <div className="w-full flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Sponsors</h1>
          <p className="text-lg text-gray-400">Proudly partnered with industry leaders</p>
          <div className="mt-6 w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-2xl shadow-blue-500/10">
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                {/* Logo Cards */}
                <div className="bg-white rounded-xl px-6 py-4 w-full md:w-auto">
                  <img src={ats} alt="" />
                </div>
                <div className="bg-white rounded-xl px-6 py-4 w-full md:w-auto">
                                   <img src={admitabroad} alt="" />

                </div>
                <div className="bg-white rounded-xl px-6 py-4 w-full md:w-auto">
                                    <img src={azent} alt="" />

                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  );
}

export default SponsorsSection;

