import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TbCalendar, 
  TbClock, 
  TbUser, 
  TbChevronLeft, 
  TbBrandFacebook, 
  TbBrandTwitter, 
  TbBrandWhatsapp,
  TbCheck
} from 'react-icons/tb';
import { blogArray } from './BlogArray';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogArray.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4">Article Not Found</h2>
        <p className="text-zinc-500 mb-8 max-w-md">We couldn't find the article you were looking for.</p>
        <Link to="/blog" className="px-6 py-3 bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 text-zinc-950 rounded-xl font-bold hover:shadow-[0_0_24px_rgba(234,179,8,0.35)] transition-colors shadow-lg">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen text-zinc-900">
      
      {/* 1. Sleek Hero Section */}
      <section className="relative flex h-screen w-full items-end overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-zinc-950/75 to-transparent mix-blend-multiply" />
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 pb-8 md:pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white font-bold text-xs uppercase tracking-[0.25em] mb-4 ring-1 ring-white/30 backdrop-blur-md">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-300 text-xs md:text-sm">
              <span className="flex items-center gap-1.5"><TbUser className="text-yellow-400" /> {blog.author}</span>
              <span className="hidden sm:block text-zinc-500">•</span>
              <span className="flex items-center gap-1.5"><TbCalendar className="text-yellow-400" /> {blog.date}</span>
              <span className="hidden sm:block text-zinc-500">•</span>
              <span className="flex items-center gap-1.5"><TbClock className="text-yellow-400" /> {blog.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl shadow-zinc-200/50 p-6 sm:p-8 md:p-12 border border-zinc-200"
        >
          
          {/* Top Bar: Back Link & Socials */}
          <div className="flex flex-col sm:flex-row justify-between items-center pb-6 mb-8 border-b border-zinc-200 gap-4">
            <Link to="/blog" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-semibold text-sm transition-colors self-start sm:self-auto">
              <TbChevronLeft size={18} /> Back to blogs
            </Link>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider mr-2">Share:</span>
              <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-zinc-900 hover:text-yellow-400 transition-colors">
                <TbBrandFacebook size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-zinc-900 hover:text-yellow-400 transition-colors">
                <TbBrandTwitter size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-zinc-50 text-zinc-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <TbBrandWhatsapp size={16} />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="text-zinc-600 font-light leading-relaxed text-base md:text-lg space-y-6">
            
            <p className="text-lg md:text-xl text-zinc-900 font-semibold leading-snug">
              {blog.excerpt}
            </p>

            <p>
              STMCZ helps teams turn complexity into clarity. Strong delivery starts with the right structure, a shared understanding of scope, and a clear owner for every moving part.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-10 mb-4">Understanding the Core Problem</h2>
            <p>
              Most project issues appear as delivery problems, but the real cause is often vague scope, weak analysis, or missing checkpoints. When the foundation is unclear, teams spend time fixing preventable mistakes.
            </p>

            {/* Blockquote Style */}
            <div className="border-l-4 border-yellow-500 pl-6 my-8">
              <p className="text-lg md:text-xl italic text-zinc-900 font-medium m-0">
                "Clarity at the start saves time at the end. Good consultancy makes the path visible before the work becomes expensive."
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-10 mb-4">Actionable Delivery Steps</h2>
            <p>
              Before work begins, there are a few simple checks that keep projects healthier and reduce avoidable rework:
            </p>
            
            <ul className="space-y-4 my-6">
              <li className="flex items-start gap-3">
                <TbCheck className="text-yellow-500 shrink-0 mt-1" size={20} />
                <span><strong>Check the scope:</strong> Confirm the target outcome is clear and agreed.</span>
              </li>
              <li className="flex items-start gap-3">
                <TbCheck className="text-yellow-500 shrink-0 mt-1" size={20} />
                <span><strong>Check the assumptions:</strong> Remove hidden risks before they become blockers.</span>
              </li>
              <li className="flex items-start gap-3">
                <TbCheck className="text-yellow-500 shrink-0 mt-1" size={20} />
                <span><strong>Inspect the handoff:</strong> Make sure every owner knows what happens next.</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-10 mb-4">When to Call the Experts</h2>
            <p>
              If a project is slipping, stakeholders are misaligned, or the team is working around unclear decisions, it is the right time for expert support.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Need Professional Help?</h3>
               <p className="text-zinc-300 text-sm md:text-base font-light">
                 Our STMCZ team is ready to help you refine strategy, delivery, and execution.
               </p>
             </div>
             <Link to="/contact" className="w-full md:w-auto shrink-0">
               <button className="w-full md:w-auto px-6 py-3 bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 text-zinc-950 font-bold rounded-xl hover:shadow-[0_0_24px_rgba(234,179,8,0.35)] transition-colors duration-300 shadow-md">
                 Contact Technicians
               </button>
             </Link>
          </div>

        </motion.div>
      </section>

    </article>
  );
}