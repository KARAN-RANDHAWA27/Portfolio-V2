import React from "react";
import Header from "../Header/Header";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto flex flex-col justify-center items-center text-center py-10 px-4">
        <section className="my-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg md:text-xl">This is the home section.</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
