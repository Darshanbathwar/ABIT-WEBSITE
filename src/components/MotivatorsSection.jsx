import React from 'react';
import sunil from '../assets/sunil.png';
import ankush from '../assets/ankush.png';
import sanjay from '../assets/sanjay.png';

// Data for the mentors.
const mentorsData = [
  {
    name: 'Prof. Ankush Hutke',
    title: 'ABIT Convenor',
    quote: 'Guiding the next generation of innovators is our passion and privilege.',
    imageUrl: ankush,
  },
  {
    name: 'Dr. Sunil Wankhade',
    title: 'Head of Department',
    quote: 'Fostering an environment of continuous learning and technical excellence.',
    imageUrl: sunil,
  },
  {
    name: 'Dr. Sanjay Bokade',
    title: 'Principal',
    quote: 'Leading with vision to empower students for a bright future in technology.',
    imageUrl: sanjay,
  },
];

const MentorCard = ({ name, title, quote, imageUrl }) => (
  <div className="relative flex flex-col items-center p-8 text-center transition-all duration-300 transform rounded-2xl bg-white/5 border border-white/30 backdrop-blur-lg shadow-lg hover:bg-white/10 hover:scale-105 group">
    <img
      src={imageUrl}
      alt={name}
      className="w-28 h-28 mb-6 transition-all duration-300 rounded-full object-cover border-4 border-white/20 shadow-md group-hover:scale-105"
    />
    <h3 className="mb-1 text-2xl font-bold text-white">{name}</h3>
    <p className="mb-4 font-medium text-blue-300">{title}</p>
    <blockquote className="pl-4 italic text-gray-300 border-l-2 border-blue-400">
      "{quote}"
    </blockquote>
  </div>
);

function MentorsSection() {
  return (
    <section className="flex flex-col py-20 px-4 overflow-hidden sm:py-32 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Meet Our Mentors
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            The guiding forces and inspirational pillars behind our success and continued growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {mentorsData.map((mentor, index) => (
            <MentorCard
              key={index}
              name={mentor.name}
              title={mentor.title}
              quote={mentor.quote}
              imageUrl={mentor.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorsSection;