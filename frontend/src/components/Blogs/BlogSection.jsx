import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TbSearch, TbCalendar, TbClock, TbArrowRight } from 'react-icons/tb';
import { blogArray, categories } from './BlogArray';

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter Logic
  const filteredBlogs = blogArray.filter((blog) => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-sans text-zinc-900 selection:bg-yellow-500/30 pb-20">
      <div className="absolute left-[8%] top-28 h-40 w-40 rounded-full border border-yellow-500/25 blur-sm" />
      <div className="absolute bottom-12 right-[8%] h-32 w-32 rotate-12 rounded-2xl bg-yellow-500/10 blur-2xl" />

      {/* Header Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden border-b border-zinc-200 text-center px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
            alt="Blog Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/65 via-zinc-950/75 to-zinc-950" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white border border-white/30 font-bold tracking-[0.25em] text-xs uppercase mb-6 backdrop-blur-md"
          >
            STMCZ Blog
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Latest Insights & {''}
            <span className="bg-linear-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Delivery Tips</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-300 text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Practical writing on project management, business analysis, support, and delivery clarity for growing teams.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Content Area: Sidebar + Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5 items-start lg:max-h-[calc(100vh-7rem)]">
          
          {/* LEFT SIDEBAR: Sticky Filters & Search */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-28 lg:self-start shrink-0 flex flex-col">
            
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-200">
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Search Articles</h3>
              <div className="relative w-full">
                <TbSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm outline-none focus:border-yellow-500 focus:bg-white transition-colors text-zinc-900"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-200 mt-4">
              <h3 className="text-lg font-bold text-zinc-900 mb-4">Categories</h3>
              <div className="flex flex-row md:overflow-hidden overflow-x-scroll md:flex-col gap-1">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeCategory === category 
                        ? 'bg-zinc-900 text-yellow-400 shadow-md' 
                        : 'bg-transparent text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Scrolling Blog Grid */}
          <div className="w-full lg:w-3/4 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-200 flex flex-col group"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-yellow-600 text-xs uppercase tracking-[0.2em] shadow-sm font-bold">
                        {blog.category}
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-8 flex flex-col grow">
                      <div className="flex items-center gap-4 text-zinc-400 text-xs font-medium mb-4">
                        <span className="flex items-center gap-1.5"><TbCalendar size={16} /> {blog.date}</span>
                        <span className="flex items-center gap-1.5"><TbClock size={16} /> {blog.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-zinc-900 mb-3 leading-snug group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      
                      <p className="text-zinc-500 font-light text-sm mb-8 line-clamp-3 grow">
                        {blog.excerpt}
                      </p>

                      <Link to={`/blog/${blog.slug}`} className="mt-auto">
                        <button className="flex items-center gap-2 text-zinc-900 font-bold text-sm hover:text-yellow-600 transition-colors group/btn">
                          Read Article 
                          <TbArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" size={18} />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="w-full bg-white rounded-xl p-16 text-center shadow-sm border border-zinc-200 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
                  <TbSearch size={32} className="text-zinc-300" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">No articles found</h3>
                <p className="text-zinc-500 font-light max-w-sm">
                  We couldn't find any articles matching your search query or category filter. Try adjusting your terms.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-8 px-8 py-3 bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 text-zinc-950 rounded-xl font-bold text-sm hover:shadow-[0_0_24px_rgba(234,179,8,0.35)] transition-colors shadow-lg"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
      
    </main>
  );
}