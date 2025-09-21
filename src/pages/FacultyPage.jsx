import React from 'react';

const headOfDepartment = {
  name: 'Dr. Sunil B. Wankhade',
  title: 'Professor and HOD',
  imageUrl: 'https://placehold.co/150x150/E2E8F0/4A5568?text=Dr.+SBW',
};

const convenors = [
  { name: 'Prof. Ankush G. Hutke', title: 'Convener and Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+AGH' },
];

const faculty = [
    { name: 'Dr. Swati Narwane', title: 'Associate Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Dr.+SN' },
    { name: 'Prof. Abhay E. Patil', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+AEP' },
    { name: 'Prof. Rahul Jiwane', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+RJ' },
    { name: 'Prof. Mrunalinee Soliv', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+MS' },
    { name: 'Prof. Snehal Bhure', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Dr.+SB' },
    { name: 'Prof. Pranoti Nage', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+PN' },
    { name: 'Prof. Renuka Nagpure', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+RN' },
    { name: 'Prof. Kiran Babar', title: 'Asst. Professor', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=Prof.+KB' },
];

const staff = [
    { name: 'Santosh Sir', title: 'Staff', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=staff' },
    { name: 'Omkar Sir', title: 'Staff', imageUrl: 'https://placehold.co/120x120/E2E8F0/4A5568?text=staff' },
];


const ProfileCard = ({ name, title, imageUrl, isLarge = false }) => {
  const cardClasses = `
    bg-neutral-900/60 backdrop-blur-sm border border-indigo-400/20 
    rounded-3xl text-center text-white p-6 flex flex-col items-center
    transform hover:scale-105 transition-transform duration-300
    shadow-lg shadow-indigo-500/10
    ${isLarge ? 'w-full max-w-md' : 'w-full max-w-[200px]'}
  `;
  
  const imageSize = isLarge ? 'w-40 h-40' : 'w-24 h-24';

  return (
    <div className={cardClasses}>
      <img
        src={imageUrl}
        alt={`Profile of ${name}`}
        className={`rounded-full object-cover mb-4 border-2 border-indigo-400/30 ${imageSize}`}
      />
      <h3 className={`font-bold ${isLarge ? 'text-2xl' : 'text-lg'}`}>{name}</h3>
      <p className="text-indigo-300 text-sm">{title}</p>
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold text-indigo-300 mb-6 [text-shadow:0_0_8px_rgba(165,180,252,0.2)]">{children}</h2>
);

const Star = ({ style }) => <div className="absolute rounded-full bg-indigo-300/50 animate-pulse" style={style}></div>;

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
        <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
        
        <Star style={{ top: '10%', left: '15%', width: '3px', height: '3px', animationDelay: '0.5s' }} />
        <Star style={{ top: '25%', left: '80%', width: '2px', height: '2px', animationDelay: '1s' }} />
        <Star style={{ top: '50%', left: '5%', width: '2px', height: '2px', animationDelay: '1.5s' }} />
        <Star style={{ top: '80%', left: '90%', width: '3px', height: '3px', animationDelay: '0.2s' }} />
        <Star style={{ top: '90%', left: '20%', width: '2px', height: '2px', animationDelay: '2s' }} />
        <Star style={{ top: '5%', left: '50%', width: '3px', height: '3px', animationDelay: '0.8s' }} />

        <div className="relative container mx-auto px-4 py-16">
            <header className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 [text-shadow:0_0_10px_rgba(196,181,253,0.3)]">
                    Meet Our Faculty
                </h1>
                <p className="text-lg text-indigo-200 mt-2">
                    Guiding Innovation in IT
                </p>
            </header>

            <main className="space-y-16 flex flex-col items-center">
                <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 lg:gap-16">
                    <section className="w-full md:w-auto flex flex-col items-center">
                        <SectionTitle>Head of Department</SectionTitle>
                        <ProfileCard 
                            name={headOfDepartment.name}
                            title={headOfDepartment.title}
                            imageUrl={headOfDepartment.imageUrl}
                            isLarge={true}
                        />
                    </section>

                    <section className="w-full md:w-auto flex flex-col items-center">
                        <SectionTitle>Convenor</SectionTitle>
                        <div className="flex flex-row justify-center gap-8">
                            {convenors.map((person, index) => (
                                <ProfileCard key={`convenor-${index}`} {...person} />
                            ))}
                        </div>
                    </section>
                </div>

                <section className="w-full flex flex-col items-center">
                    <SectionTitle>Faculty</SectionTitle>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                         {faculty.map((person, index) => (
                            <ProfileCard key={`faculty-${index}`} {...person} />
                        ))}
                    </div>
                </section>

                <section className="w-full flex flex-col items-center">
                    <SectionTitle>Staff</SectionTitle>
                    <div className="flex md:flex-row flex-col justify-center gap-6 md:gap-8">
                        {staff.map((person, index) => (
                            <ProfileCard key={`staff-${index}`} {...person} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    </div>
  );
}

