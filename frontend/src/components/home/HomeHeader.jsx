import React, { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    title: "Turning Complexity Into Clarity",
    description: "Dual Discipline Specialists dedicated to driving your business progress through expert management.",
    image: "https://ccitraining.edu/wp-content/uploads/2025/04/how-to-get-an-office-job.png",
  },
  {
    title: "Mastering the Triple Constraint",
    description: "Optimizing Cost, Time, and Scope without ever compromising on the Quality your brand deserves.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlz18pSxY4N9apnDUdb0_Hi-dltCzYMU5YsQ&s",
  },
  {
    title: "Clarity Into Progress",
    description: "Innovative strategies designed to transform technical challenges into streamlined success.",
    image: "https://research.com/resized/uploads/1760601969_0_title_homeland_security_vs_criminal_justice_degree_explaining_the_difference_in_currentyear_career1_homeland_security_degree_programs_cb463069b6.webp?format=thumbnail",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Memoize slide navigation to keep useEffect clean
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const startAutoSlide = useCallback(() => {
    stopAutoSlide(); // Ensure any existing interval is cleared first
    intervalRef.current = setInterval(nextSlide, 5000);
  }, [nextSlide]);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  return (
    <section
      className="relative w-full h-[100vh] overflow-hidden bg-gray-900"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      aria-roledescription="carousel"
    >
      {/* Background Images with Ken Burns effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={slide.image}
            alt="" // Decorative image, title is in H1
            className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-linear ${
              index === current ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70  z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        {/* The 'key' here forces a re-mount/animation when 'current' changes */}
        <div key={current} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            {slides[current].title}
          </h1>

          <p className="max-w-2xl text-lg mb-10 text-gray-200 mx-auto drop-shadow-sm">
            {slides[current].description}
          </p>

          <div className="flex gap-4 justify-center">
            <button className="bg-amber-400 cursor-pointer text-black px-8 py-3 rounded-xl font-bold hover:bg-amber-300 transition-all active:scale-95 shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white/80 cursor-pointer px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition-all active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              current === index 
                ? "w-8 bg-amber-400" 
                : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;