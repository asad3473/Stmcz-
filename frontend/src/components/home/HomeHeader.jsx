import React, { useState, useEffect } from 'react';
// Importing specific icons from React Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const HomeHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Turning Complexity Into Clarity",
      description: "Dual-Discipline Specialists dedicated to driving your business progress through expert management.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Mastering the Triple Constraint",
      description: "Optimizing Cost, Time, and Scope without ever compromising on the Quality your brand deserves.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Clarity Into Progress",
      description: "Innovative strategies designed to transform technical challenges into streamlined success.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-950 font-sans">
  

      {/* Main Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background with subtle zoom effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms]"
            style={{ 
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          {/* Dark Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/80 to-zinc-950" />

          {/* Centered Content */}
          <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 h-1 w-20 bg-gradient-to-r from-yellow-600 to-yellow-300" />
            <h1 className="mb-6 max-w-5xl text-xl font-black tracking-tight text-white md:text-5xl leading-[1.1]">
              {slide.title.split(' ').map((word, i) => (
                <span key={i} className={['clarity', 'progress', 'constraint'].includes(word.toLowerCase()) ? 'text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="mb-10 max-w-2xl text-lg font-light tracking-wide text-zinc-400 md:text-xl ">
              "{slide.description}"
            </p>
            
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <button className="group flex items-center justify-center space-x-3 cursor-pointer rounded-full bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 px-5 py-3 font-semibold text-zinc-950 transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] active:scale-95">
                <span className="  text-md">Initiate Progress</span>
                <HiOutlineArrowNarrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="rounded-full border border-yellow-500/20 bg-zinc-900/40 px-5 py-3  text-sm font-semibold   cursor-pointer text-yellow-500 backdrop-blur-xl transition hover:bg-yellow-500/10 hover:border-yellow-500/50">
                View Disciplines
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls using React Icons */}
      <div className="absolute inset-y-0 left-6 z-40 hidden md:flex items-center">
        <button onClick={prevSlide} className="group p-4 text-zinc-500 hover:text-yellow-500 transition-colors">
          <IoIosArrowBack size={45} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-6 z-40 hidden md:flex items-center">
        <button onClick={nextSlide} className="group p-4 text-zinc-500 hover:text-yellow-500 transition-colors">
          <IoIosArrowForward size={45} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bottom Progress Bar Indicators */}
      <div className="absolute bottom-12 flex w-full justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] transition-all duration-700 ${index === currentSlide ? 'w-16 bg-yellow-500' : 'w-8 bg-zinc-800 hover:bg-zinc-600'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHeader;