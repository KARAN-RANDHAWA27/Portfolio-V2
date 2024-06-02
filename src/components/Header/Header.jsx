import React, { useState } from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const NavLink = ({ to, children, onClick }) => {
    const isActive = location.pathname === to;

    return (
      <ReactRouterLink
        to={to}
        onClick={onClick}
        className="text-white hover:text-gray-300 py-2 px-4 rounded-lg"
        activeClassName="text-gray-300"
      >
        {children}
      </ReactRouterLink>
    );
  };

  return (
    <header className="header fixed top-0 left-0 right-0 bg-transparent text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <div className="flex items-center">
          <ReactRouterLink to="/" className="text-xl font-bold text-white">
            Karan Randhawa
          </ReactRouterLink>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink to="/education" onClick={closeMenu}>
            Education
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/blogs" onClick={closeMenu}>
            Blogs
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
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
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Drawer Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-gray-900 transform transition-transform ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
            <NavLink to="/education" onClick={closeMenu}>
              Education
            </NavLink>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink to="/blogs" onClick={closeMenu}>
              Blogs
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
