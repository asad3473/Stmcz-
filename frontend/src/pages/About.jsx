import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <div className=" overflow-hidden">

      {/* 🌟 HERO */}
      <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="hero"
          className="absolute w-full h-full object-cover scale-110"
        />

        {/* GOLD + BLACK overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />

        {/* Gold glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.25),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-6 max-w-4xl"
        >
          <p className="text-sm tracking-[6px] text-yellow-600 mb-4 uppercase">
            Premium Consultancy
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building Ideas me
            <span className="text-yellow-600"> Success</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8">
            We help businesses grow through strategy, innovation, and execution excellence.
          </p>

          <button className="mt-10 px-8 py-3 bg-yellow-600 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all shadow-lg">
            Explore More
          </button>
        </motion.div>
      </div>

      {/* 🧠 ABOUT TEXT */}
      <div className="py-28 px-6 md:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">
            Who We Are
          </h2>

          <p className="text-gray-800 text-lg leading-9">
            STMCZ is a UK-based consultancy specialising in Project Management and Business Analysis.
            We help organisations deliver transformation, optimise operations, and achieve measurable growth
            through structured strategy and execution.
          </p>
        </motion.div>
      </div>

      {/* ⚡ FEATURES */}
      <div className="py-28 px-6 md:px-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-600">
          What We Do Best
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Strategy",
              desc: "We design powerful business strategies that drive growth."
            },
            {
              title: "Execution",
              desc: "We turn plans into real-world measurable results."
            },
            {
              title: "Optimization",
              desc: "We improve systems, performance, and efficiency."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-[#111] border border-yellow-600/20 shadow-lg hover:shadow-yellow-600/20 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3 text-yellow-600">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🚀 PROCESS */}
      <div className="py-28 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-20 text-yellow-600">
          Our Process
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">

          {[
            { title: "Discovery", desc: "Understanding business needs in depth." },
            { title: "Planning", desc: "Creating structured roadmap and strategy." },
            { title: "Execution", desc: "Implementing with precision and clarity." },
            { title: "Growth", desc: "Scaling success with continuous improvement." }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="w-[80%] md:w-[60%]  p-6 rounded-2xl shadow-lg border-l-4 border-yellow-600">
                <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                  {step.title}
                </h3>
                <p className="text-gray-800">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 📊 STATS */}
      <div className="py-28 px-6 md:px-20 border-y border-yellow-600/20">
        <div className="grid md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto">

          {[
            { num: "150+", text: "Projects" },
            { num: "50+", text: "Clients" },
            { num: "10+", text: "Years" },
            { num: "100%", text: "Satisfaction" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-5xl font-bold mb-2 text-yellow-600">
                {item.num}
              </h3>
              <p className="text-gray-800">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🎯 CTA */}
      <div className="py-28 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto text-center border border-yellow-600/30 text-white p-16 rounded-[40px] shadow-2xl"
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-600">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-800 mb-8">
            Partner with us to turn your vision into real success.
          </p>

          <button className="px-8 py-3 bg-yellow-600 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            Contact Us
          </button>
        </motion.div>
      </div>

    </div>
  );
};

export default About;