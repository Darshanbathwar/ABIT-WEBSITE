import React, { useState } from 'react';

// --- Reusable Team Display Component ---
// This component now accepts a 'backgroundClass' prop to allow customization.
export default function TeamDisplay ({ title, teamMembers, backgroundClass = 'bg-[#1a1a1a]' }){
  const featuredMember = teamMembers.find((member) => member.featured);
  const otherMembers = teamMembers.filter((member) => !member.featured);

  return (
    <div className={`relative ${backgroundClass} text-gray-300 font-sans w-full p-4 animate-fade-in transition-all duration-500`}>
      <main className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10">
          {featuredMember && (
            <div className="flex-shrink-0 lg:w-2/5 flex flex-col items-center text-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 animate-pulse-slow">
                  <div className="bg-[#0d0d0d] h-full w-full rounded-full p-1">
                    <img
                      src={featuredMember.imageUrl}
                      alt={featuredMember.name}
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x500/0d0d0d/FFF?text=Error'; }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/70 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-3 shadow-2xl shadow-purple-500/20 w-max">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                    {featuredMember.name}
                  </h3>
                  <p className="text-purple-300 text-center">{featuredMember.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Other Members Grid Section */}
          <div className="flex-grow flex justify-center lg:justify-start lg:w-3/5">
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
              {otherMembers.map((member) => (
                <div
                  key={member.name + member.role}
                  className="bg-gray-500/10 backdrop-blur-md border border-purple-500/30 rounded-2xl p-4 text-center group transition-all duration-300 ease-in-out hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto relative mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full mx-auto rounded-lg object-cover"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x500/0d0d0d/FFF?text=Error'; }}
                    />
                    <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-gray-100">{member.name}</h4>
                  <p className="text-purple-300 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

