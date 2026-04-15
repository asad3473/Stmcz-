import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from "react-icons/hi";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

const faqs = [
    {
      question: "What defines a Dual-Discipline Specialist?",
      answer: "At STMCZ, we bridge the gap between technical engineering and commercial strategy. We don't just review code; we architect the business logic and project lifecycles required to turn complex theory into tangible progress."
    },
    {
      question: "How do you protect the 'Quality Core' of a project?",
      answer: "We master the Triple Constraint—balancing Cost, Time, and Scope with surgical precision. This allows us to protect the Quality of your project even under the most aggressive deadlines."
    },
    {
      question: "Can you recover a project already in progress?",
      answer: "Absolutely. Our specialists perform deep-dive audits to unearth bottlenecks in active workflows. We then architect a risk-adjusted recovery roadmap to secure your investment and ensure a successful delivery."
    },
    {
      question: "Which high-precision industries do you serve?",
      answer: "Our methodology is industry-agnostic, but we excel in environments where there is zero margin for error, such as FinTech, Digital Infrastructure, and Advanced AI Software Workflows."
    },
    {
      question: "How is progress reported and communicated?",
      answer: "Transparency is our foundation. We provide structured, data-driven reporting that removes jargon, ensuring everyone from your engineering team to your executive board has absolute clarity on the project's health."
    },
    {
      question: "What is the expected timeline for a STMCZ engagement?",
      answer: "Engagement depends on complexity. A rapid architectural audit typically spans 2 weeks, while a full-scale delivery overhaul is milestone-based. We define these 'Progress Gates' at the start so results are always predictable."
    }
];
  return (
    <section className="py-10 bg-white overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* CENTERED TITLE */}
        <div className="text-center mb-16 relative">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-3"
          >
            Inquiry Support
          </motion.h4>
          <h2 className="text-2xl md:text-4xl font-black text-zinc-900 leading-tight">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400">Questions</span>
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT SIDE: Image Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5 relative group"
          >
            {/* "Charm" Element: Skewed frame behind image */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-yellow-500/10 rounded-3xl -z-10 transition-transform group-hover:translate-x-2" />
            
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl bg-white border border-zinc-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://img.freepik.com/premium-photo/young-professor-giving-computer-science-lecture-diverse-multiethnic-group-female-male-cla_1313853-82529.jpg?ga=GA1.1.2142144714.1772005373&semt=ais_hybrid&w=740&q=80"
                alt="Architecture & Strategy"
                className="w-full  md:h-[450px] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              {/* Floating Glass Label */}
              <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                 <p className="text-white text-xs font-bold uppercase tracking-widest text-center">Dual <br /> Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Formal Accordion */}
          <div className="lg:w-3/5 space-y-2">
        
            
            <div className="border-t border-zinc-100">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-zinc-100"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left group transition-all"
                  >
                    <span className={`font-bold md:text-lg transition-colors duration-300 ${
                      activeIndex === index ? 'text-yellow-600' : 'text-zinc-800 group-hover:text-yellow-600'
                    }`}>
                      {faq.question}
                    </span>
                    
                    <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-yellow-500 text-zinc-950 rotate-180' : 'bg-zinc-100 text-zinc-400'
                    }`}>
                      {activeIndex === index ? <HiMinus size={18} /> : <HiPlus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 text-zinc-500 leading-relaxed text-md max-w-2xl border-l-2 border-yellow-500/30 pl-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>

   

      </div>
    </section>
  );
};

export default FaqSection;