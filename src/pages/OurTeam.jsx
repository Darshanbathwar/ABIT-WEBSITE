import { useState } from 'react';
import TeamDisplay from '../components/TeamDisplay';
import DotGrid from '../Components/DotGrid';

const coreTeam2526 = [
  { name: "John Doe", role: "President", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80", featured: true },
  { name: "John Doe", role: "Vice President", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
  { name: "John Doe", role: "General Secretary", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
  { name: "John Doe", role: "Treasurer", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
  { name: "John Doe", role: "Joint Secretary", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
];

const pastCoreTeam2425 = [
    { name: "John Doe", role: "President '24", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80", featured: true },
    { name: "John Doe", role: "Vice President '24", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
    { name: "John Doe", role: "General Secretary '24", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
    { name: "John Doe", role: "Treasurer '24", imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" },
];

// --- COMBINED DATA STRUCTURE FOR THE APP ---
const allTeamsData = [
    { year: "2025-2026", title: "Core 25-26", members: coreTeam2526 },
    { year: "2024-2025", title: "Past Core 24-25", members: pastCoreTeam2425 },
    // Placeholder data for other years.
    { year: "2023-2024", title: "Past Core 23-24", members: [{ name: "John Doe", role: "President '23", featured: true, imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" }] },
    { year: "2022-2023", title: "Past Core 22-23", members: [{ name: "John Doe", role: "President '22", featured: true, imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" }] },
    { year: "2021-2022", title: "Past Core 21-22", members: [{ name: "John Doe", role: "President '21", featured: true, imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" }] },
    { year: "2020-2021", title: "Past Core 20-21", members: [{ name: "John Doe", role: "President '20", featured: true, imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=500&h=500&q=80" }] },
];



// --- MAIN APP COMPONENT (Renamed to OurTeam) ---
export default function OurTeam() {
  // State to track which past years are currently expanded.
  const [selectedYears, setSelectedYears] = useState([]);
  
  // Separate the current team from the past teams
  const currentTeam = allTeamsData.find(team => team.year === "2025-2026");
  const pastTeams = allTeamsData.filter(team => team.year !== "2025-2026");


  // This function handles the toggle logic for past teams
  const handleYearToggle = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter(y => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  return (
    <div className="bg-[#0d0d0d] min-h-screen">
    
      <div className="min-h-screen flex flex-col justify-center border-b-2 z-10 border-gray-800 relative">
        <div className="text-center p-6 sm:p-8 relative z-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text z-20 bg-gradient-to-r from-blue-400 to-purple-500">
              {currentTeam.title}
            </h2>
        </div>
        <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}>
  <DotGrid
    dotSize={10}
    gap={15}
    baseColor="#FFFFF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={3}
    resistance={750}
    returnDuration={1.5}
  />
</div>
        <TeamDisplay 
            teamMembers={currentTeam.members}
            backgroundClass="bg-transparent" // Override the default dark background
        />
      </div>

      {/* 2. Accordion section for past teams */}
      <div className="w-full">
        {pastTeams.map((team) => (
          <div key={team.year} className="border-b border-gray-800">
            <button
              onClick={() => handleYearToggle(team.year)}
              className="w-full text-center p-6 sm:p-8 bg-transparent transition-colors duration-300 hover:bg-gray-900/50"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {team.title}
              </h2>
            </button>
            {/* If the selected years array includes this team's year, render the details */}
            {selectedYears.includes(team.year) && (
              <TeamDisplay
                title={team.title}
                teamMembers={team.members}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
