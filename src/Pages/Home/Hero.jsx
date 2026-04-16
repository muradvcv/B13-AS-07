import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="py-16 sm:py-20 md:py-24 px-4 text-center">
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Friends to keep close in your life
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 leading-relaxed px-2 sm:px-0">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base transition">
            + Add a Friend
          </button>

        </div>
      </section>
    </div>
  );
};

export default Hero;