import React from "react";
import {
  MenuIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-center">
        <div className="flex items-center space-x-4">
          <a className="text-white text-2xl font-bold" href="#">
            My Portfolio
          </a>
        </div>
        <button className="text-white block lg:hidden" type="button">
          <MenuIcon className="w-6 h-6" />
        </button>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center">
          <div className="text-sm lg:flex-grow flex flex-col lg:flex-row lg:space-x-6 justify-center">
            <a
              href="#home"
              className="flex items-center mt-4 lg:mt-0 text-white hover:text-gray-400"
            >
              <HomeIcon className="w-5 h-5 mr-2" /> Home
            </a>
            <a
              href="#about"
              className="flex items-center mt-4 lg:mt-0 text-white hover:text-gray-400"
            >
              <UserIcon className="w-5 h-5 mr-2" /> About
            </a>
            <a
              href="#projects"
              className="flex items-center mt-4 lg:mt-0 text-white hover:text-gray-400"
            >
              <BriefcaseIcon className="w-5 h-5 mr-2" /> Projects
            </a>
            <a
              href="#contact"
              className="flex items-center mt-4 lg:mt-0 text-white hover:text-gray-400"
            >
              <MailIcon className="w-5 h-5 mr-2" /> Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
