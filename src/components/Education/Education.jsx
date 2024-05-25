import React from "react";
import Header from "../Header/Header";
import backgroundImage from "../../assets/bg.jpg";

const Education = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Header />
      <main className="container mx-auto flex flex-col justify-center items-center text-center py-10 px-4 relative z-10">
        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg md:text-xl text-white">
            This is the home section.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Education;
