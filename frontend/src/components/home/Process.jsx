import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineShieldCheck, HiOutlineRocketLaunch } from "react-icons/hi2";

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "Deep-dive audits to unearth operational bottlenecks and hidden complexities.",
      icon: <HiOutlineSearch size={22} />,
    },
    {
      title: "Gap Analysis",
      desc: "Identifying the precise distance between your current state and target success.",
      icon: <HiOutlineLightBulb size={22} />,
    },
    {
      title: "Architecture",
      desc: "Engineering risk-adjusted frameworks designed for scalable delivery.",
      icon: <HiOutlineShieldCheck size={22} />,
    },
    {
      title: "Progress",
      desc: "Turning strategy into tangible milestones through quality assurance.",
      icon: <HiOutlineRocketLaunch size={22} />,
    }
  ];

  return (
    <section className="py-10 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-[9px] mb-2"
          >
            Methodology
          </motion.h4>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300">Clarity</span> Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Fixed Animated Connector Line */}
          <div className="hidden md:block absolute top-[52px] left-0 w-full h-[1px] bg-zinc-800 -z-0">
            <motion.div 
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="w-full h-full bg-gradient-to-r from-yellow-600 to-yellow-300"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm group hover:border-yellow-500/20 transition-all duration-300"
            >
              {/* Icon Container - Reduced Padding */}
              <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 mb-6 transition-all duration-300 group-hover:text-yellow-500 group-hover:border-yellow-500/40">
                {step.icon}
              </div>

              {/* Step Info */}
              <div className="bg-yellow-500/10 text-yellow-500 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-3">
                Step 0{i + 1}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-yellow-500 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-[13px] text-zinc-500 leading-relaxed px-1">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;