import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </>
  );
}

export default App;
