import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Step 1: Import Link
import PillMenu from './PillMenu';
import logo from "../assets/logo.png";
import "../App.css";

function Navbar() {
  // 👇 Step 2: Modify the 'items' array to use the Link component
  const menuItems = [
    { label: <Link to="/" className="block w-full h-full px-4 py-2">Home</Link>, href: "/" },
    { label: <Link to="/ourteam" className="block w-full h-full px-4 py-2">Our Team</Link>, href: "/ourteam" },
    { label: <Link to="/events" className="block w-full h-full px-4 py-2">Events</Link>, href: "/events" },
    { label: <Link to="/faculty" className="block w-full h-full px-4 py-2">Faculty</Link>, href: "/faculty" },
  ];

  
  return (
    <div className="mynav h-[9vh] md:h-[9vh] fixed top-0 z-50 w-full flex md:justify-center bg-transparent">
        
          <PillMenu
            logo={logo}
            logoAlt="Company Logo"
            items={menuItems} // 👈 Step 3: Pass the modified array
            className="custom-nav mt-2"
            ease="power2.easeOut"
            baseColor="#B19EEF"
            pillColor="#000000"
            hoveredPillTextColor="black"
            pillTextColor="white"
          />
      </div>
  )
}

export default Navbar;