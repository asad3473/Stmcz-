import React from 'react';
import {
  MdOutlineSettingsSuggest,
  MdOutlineAnalytics,
  MdOutlineAssignmentTurnedIn
} from "react-icons/md"; // Using IonIcons for a modern look
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; // For the CTA arrow
const Servicess = () => {
  const services = [
    {
      title: "Project Management",
      desc: "Comprehensive oversight from inception to closure. We apply structured methodologies to balance competing constraints, mitigate risks, and ensure your strategic objectives are met with precision.",
      icon: <MdOutlineSettingsSuggest size={45} />,
      link: "#"
    },
    {
      title: "Business Analysis",
      desc: "Bridging the gap between business needs and technical solutions. We elicit, analyze, and document requirements to uncover efficiencies and map out clear paths for digital and operational transformation.",
      icon: <MdOutlineAnalytics size={45} />,
      link: "#"
    },
    {
      title: "Project Review & Tiered Services",
      desc: "Flexible, outcome-based consultancy packages designed for project health checks. From requirement audits to full-scale post-implementation reviews, we provide the clarity needed to keep projects on track.",
      icon: <MdOutlineAssignmentTurnedIn size={45} />,
      link: "#"
    }
  ];
 

  return (
    <section className=" py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-10 md:mb-16 text-center">
          <h4 className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Our Expertise</h4>
          <h2 className="text-2xl md:text-5xl font-black text-black">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">Consultancy Solutions</span>
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-md bg-zinc-900 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-yellow-500/30 hover:bg-zinc-900 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Icon Container */}
              <div className="mb-4 text-yellow-500 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm md:text-base">
                {service.desc}
              </p>

              {/* CTA Link */}
              <a
                href={service.link}
                className="flex items-center space-x-2 text-yellow-500 font-bold text-sm tracking-widest uppercase group-hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <HiOutlineArrowNarrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </a>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="text-6xl font-black text-white">0{index + 1}</div>
              </div>
            </div>
          ))}
        </div>

      
    
      </div>
    </section>
  );
};

export default Servicess;