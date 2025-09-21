import "../App.css";
import GradientBlinds from "../components/GradientBlinds";
import CoreTeam from "../components/CoreTeam";
import MotivatorsSection from "../components/MotivatorsSection";
import SponsorsSection from "../components/SponsorsSection";
import HeroSection from "../components/HeroSection";
import ScrollVelocity from "../components/ScrollVelocity";
import HorizontalScroll from "../components/HorizontalScroll";

function Home() {
  return (
    <div className="overflow-hidden w-full md:h-full h-full flex flex-col bg-black">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          marginTop: "4%",
          overflow: "hidden",
        }}
      >
        {/*This is just the background*/}
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0.1}
          noise={0.1}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.42}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={1}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      <HeroSection />

      <div className="coreteam mt-20">
        <CoreTeam />
      </div>
      <ScrollVelocity
        texts={[
          "Association of Budding Information Technocrats ",
          "Talented Minds ✦ Diligent Hearts ✦",
        ]}
        velocity="100"
        className="custom-scroll-text text-white py-3"
      />

      <MotivatorsSection />

      <div className="sponsors">
        <SponsorsSection />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold z-10 text-white mx-auto pt-10">
        Explore Our Work
      </h2>
        <HorizontalScroll />
        
    </div>
  );
}

export default Home;
