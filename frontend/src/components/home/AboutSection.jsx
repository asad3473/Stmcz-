import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiOutlineBadgeCheck } from "react-icons/hi";

export default function AboutSection() {
    const { scrollYProgress } = useScroll();
    
    // Parallax effects for the background shapes
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    const disciplines = [
        { title: "Architecture", desc: "Building solid project blueprints so they don't collapse under pressure." },
        { title: "Analysis", desc: "Finding the 'missing pieces' in requirements before they become expensive mistakes." },
        { title: "Frameworks", desc: "Creating safety nets that keep your project moving, even when things go wrong." },
        { title: "Efficiency", desc: "Removing 'fluff' and delays to finish your project faster without overspending." },
        { title: "Quality Control", desc: "Strict checking at every stage to ensure the result is exactly what you asked for." }
    ];

    return (
        <section className="relative py-10 w-full overflow-hidden bg-white">
            {/* Parallax Ornaments */}
            <motion.div style={{ y: y1 }} className="absolute top-10 right-[10%] w-32 h-32 border border-yellow-500/20 rounded-full blur-sm" />
            <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[5%] w-24 h-24 bg-yellow-500/5 rounded-xl rotate-45 blur-md" />

            <div className="max-w-6xl mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
                    
                    {/* LEFT SIDE: Image Layout */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-yellow-500/30 rounded-md -z-10" />
                        
                        <div className="relative z-10 overflow-hidden px-2 rounded-md shadow-2xl group">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Strategy Session"
                                className="w-full md:h-[500px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all rounded-md duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-2 md:p-6 bg-black/60 backdrop-blur-lg rounded-md md:rounded-2xl border border-white/10">
                                <p className="text-yellow-500 md:font-black text-lg md:text-2xl tracking-tight">STMCZ Methodology</p>
                                <p className="text-zinc-300 text-[10px] font-bold tracking-[0.3em] uppercase">Complexity into Clarity</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Content */}
                    <div className="space-y-4 px-2">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-block px-3 py-1 mb-4 rounded-full bg-yellow-500/10 text-yellow-600 text-[10px] font-bold  uppercase tracking-[0.2em]"
                            >
                                Specialized Consultancy
                            </motion.div>

                            <h2 className="text-2xl text-center md:text-3xl font-black md:text-start text-zinc-900 leading-[1.1]">
                                Smart <span className="text-yellow-500">Planning {''}</span>
                                Smooth <span className="relative inline-block">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400">Execution.</span>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="absolute bottom-2 left-0 h-4 bg-yellow-500/10 -z-10" 
                                    />
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 ">
                            {disciplines.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative group flex items-start space-x-4 p-4 rounded-xl hover:bg-zinc-50 transition-all cursor-default"
                                >
                                    {/* Numbering Charm */}
                                    <span className="absolute right-6 top-2 text-6xl font-black text-zinc-100 select-none group-hover:text-yellow-500/5 transition-colors">
                                        0{i + 1}
                                    </span>
                                    
                                    <div className="mt-1 shrink-0">
                                        <HiOutlineBadgeCheck className="text-yellow-500 text-3xl group-hover:rotate-12 transition-transform" />
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="font-bold text-zinc-900 uppercase text-xs  mb-1">{item.title}</h4>
                                        <p className="text-zinc-500 text-sm leading-snug max-w-[400px]">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}