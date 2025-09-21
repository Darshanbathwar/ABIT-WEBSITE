import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import FacultyPage from "./pages/FacultyPage";
import OurTeam from "./pages/OurTeam";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      // ...other options
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-black h-full">
        <Navbar /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </>
  );
}

export default App;
