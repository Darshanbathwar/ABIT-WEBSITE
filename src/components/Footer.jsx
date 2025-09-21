import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import banner from "../assets/banner.png"; // Make sure this path is correct

const Footer = () => {
  // Social links data
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "#",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "#",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "#",
    },
  ];

  // A helper component for link sections to avoid repetition
  const LinkSection = ({ title, links }) => (
    <div>
      <h3 className="text-white font-semibold tracking-wider uppercase text-glow">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-white hover:underline transition-colors duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="lg:w-2/5 space-y-6">
            <img src={banner} alt="ABIT Logo" className="h-28 mx-auto lg:mx-0" />
            <div className="text-gray-400 text-center lg:text-left">
              <p className="font-semibold text-white">Location:</p>
              <p>MCT's Rajiv Gandhi Institute Of Technology,</p>
              <p>Juhu Versova Link Rd, Versova, Andheri West,</p>
              <p>Mumbai - 400053</p>
            </div>
          </div>

          {/* Right side: Navigation Links */}
          <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-8">
            <LinkSection
              title="About Us"
              links={[
                { name: "Faculty", href: "#" },
                { name: "Team", href: "#" },
              ]}
            />
            <LinkSection
              title="Explore"
              links={[
                { name: "Events", href: "#" },
                { name: "Magazine", href: "#" },
              ]}
            />
             <LinkSection
              title="Contact"
              links={[
                { name: "Get in Touch", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Bottom section: Copyright and Social Links */}
        <div className="mt-16 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} ABITRGIT. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;