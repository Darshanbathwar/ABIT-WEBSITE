import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom"; // 1. Import useLocation
import EventsPage from "./pages/EventsPage";
import FacultyPage from "./pages/FacultyPage";
import OurTeam from "./pages/OurTeam";
import { useEffect, useRef } from "react"; // 2. Import useRef
import Lenis from "@studio-freight/lenis";

function App() {
  const lenisRef = useRef(null); // 3. Create a ref to hold the lenis instance
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    lenisRef.current = lenis; // Store the instance in the ref

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null; // Clean up the ref
    };
  }, []);

  // 4. Add this useEffect to scroll to top on page change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location]);

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