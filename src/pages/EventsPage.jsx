import React from 'react';
import Ribbons from '../components/Ribbons'; // Assuming this is the correct path
import eventimg from '../assets/event.jpg'; // Placeholder image

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
);

const PinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`opacity-70 ${className}`}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// --- Header Pattern Component ---
const HeaderPattern = () => (
    <svg
        className="absolute inset-0 z-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 200"
    >
        <g stroke="rgba(217, 70, 239, 0.8)" strokeWidth="1">
            {/* Perspective lines from a vanishing point */}
            <path d="M-100 200 L380 30" />
            <path d="M0 200 L385 30" />
            <path d="M100 200 L390 30" />
            <path d="M200 200 L395 30" />
            <path d="M300 200 L400 30" />
            <path d="M400 200 L400 30" />
            <path d="M500 200 L405 30" />
            <path d="M600 200 L410 30" />
            <path d="M700 200 L415 30" />
            <path d="M800 200 L420 30" />
            <path d="M900 200 L425 30" />

            {/* Horizontal lines getting closer */}
            <path d="M0 200 L800 200" />
            <path d="M0 150 L800 150" />
            <path d="M0 115 L800 115" />
            <path d="M0 90 L800 90" />
            <path d="M0 70 L800 70" />
            <path d="M0 55 L800 55" />
        </g>
         <g stroke="rgba(217, 70, 239, 0.1)" strokeWidth="1.5" fill="rgba(217, 70, 239, 0.1)">
            {/* Circuit details */}
            <rect x="150" y="125" width="20" height="5" />
            <rect x="650" y="160" width="30" height="5" />
            <path d="M200 150 L200 115 L250 115" />
            <path d="M600 115 L550 115 L550 90" />
        </g>
    </svg>
);


// --- Event Data ---
const upcomingEvents = [
  {
    title: 'SE Interview',
    date: '20 Sep, 2025',
    location: 'RGIT',
    icon: <PinIcon />,
    imageUrl:eventimg,
  },
  {
    title: 'AI workshop',
    date: '20 Sep, 2025',
    location: 'RGIT',
    icon: <PinIcon />,
    imageUrl: eventimg,
  },
  {
    title: 'Web Dev workshop',
    date: '20 Sep, 2025',
    location: 'RGIT',
    icon: <LinkIcon />,
    imageUrl: eventimg,
  },
];

const pastEvents = [
  {
    title: 'Coders Date',
    date: 'JUL 2024',
    location: 'RGIT',
    imageUrl: eventimg,
  },
  {
    title: 'Junior Core Interview',
    date: 'AUG 2025',
    location: 'RGIT',
    imageUrl: eventimg,
  },
  {
    title: 'Teachers Day',
    date: 'SEP 2025',
    location: 'RGIT',
    imageUrl: eventimg,
  },
];


const EventCard = ({ children, imageUrl, isPopular }) => (
  <div className="relative group rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 shadow-lg h-full">
    
  <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
    <div className="relative p-6 md:p-8 h-full flex flex-col justify-end">
      {children}
    </div>
    {isPopular && (
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45">
          <div className="bg-rose-600 text-white text-xs font-bold uppercase tracking-wider px-12 py-1.5 shadow-md">
            Popular
          </div>
      </div>
    )}
  </div>
);

export default function EventsPage() {
  return (
    <>
      {/* Main container is now relative and hides overflow for the Ribbons component */}
      <div className="relative bg-[#0d071a] min-h-screen font-sans text-slate-200 overflow-hidden">
        
        {/* Ribbons component is placed here to act as a background */}
        <div className="absolute inset-0 z-0">
          <Ribbons
            baseThickness={30}
            colors={['#5227FF']}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={true}
            enableShaderEffect={true}
          />
        </div>

        {/* Content wrapper must be relative to sit on top of the absolute positioned ribbons */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-16">
            <header className="relative text-center mb-16 pt-20 pb-12 overflow-hidden rounded-lg">
                <HeaderPattern />
                {/* Fading overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d071a] via-[#0d071a]/80 to-[#0d071a]"></div>
                {/* Content */}
                <div className="relative z-20 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-fuchsia-400 uppercase"
                        style={{ textShadow: '0 0 10px rgba(244, 114, 182, 0.4), 0 0 20px rgba(217, 70, 239, 0.3)' }}>
                        Our Events
                    </h1>
                </div>

                {/* Glowing line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-fuchsia-500/40 rounded-full blur-lg z-20"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/5 h-0.5 bg-fuchsia-400 rounded-full z-20"></div>
            </header>

            <main>
              {/* Upcoming Events Section */}
              <section className="mb-20">
                <h2 className="text-2xl font-semibold tracking-wider text-fuchsia-400 mb-8 uppercase">
                  Upcoming Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.title} imageUrl={event.imageUrl}>
                      <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                      <div className="flex items-center space-x-3 text-slate-300 mb-6 text-sm">
                        <CalendarIcon />
                        <span>{event.date}</span>
                        <span className="text-slate-500">•</span>
                        {event.icon}
                        <span>{event.location}</span>
                      </div>
                      <button className="w-full sm:w-auto bg-fuchsia-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-fuchsia-700 transition-all duration-300 shadow-lg shadow-fuchsia-600/20">
                        Register Now
                      </button>
                    </EventCard>
                  ))}
                </div>
              </section>

              {/* Past Events Section */}
              <section>
                <h2 className="text-2xl font-semibold tracking-wider text-fuchsia-400 mb-8 uppercase">
                  Past Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event) => (
                    <EventCard key={event.title} imageUrl={event.imageUrl} isPopular={event.popular}>
                      <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                      <div className="flex items-center space-x-3 text-slate-300 mb-6 text-sm">
                        <span>{event.date}</span>
                        <span className="text-slate-500">•</span>
                        <span>{event.location}</span>
                      </div>
                       <button className="w-full sm:w-auto bg-slate-700/50 border border-slate-600 text-slate-200 font-bold py-3 px-8 rounded-lg hover:bg-slate-700/80 hover:border-slate-500 transition-all duration-300">
                        View Gallery
                      </button>
                    </EventCard>
                  ))}
                </div>
              </section>
            </main>

            
          </div>
        </div>
      </div>
    </>
  );
}