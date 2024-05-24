import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="text-xl font-bold flex items-center">
          <span className="mr-4">Your Logo or Brand</span>
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`md:flex flex-col md:flex-row md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#about"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block md:inline-block py-2 md:py-0 hover:text-gray-300"
          >
            Contact
          </a>
        </nav>
      </div>
      {/* Close button at the bottom of the drawer */}
      {isOpen && (
        <button
          className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white py-2"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      )}
    </header>
  );
};

export default Header;
