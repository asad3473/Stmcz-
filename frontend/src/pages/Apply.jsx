import React, { useState } from 'react';
import { FaArrowRight, FaFileUpload, FaShieldAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';
import ServiceHero from '../components/services/ServiceHero'

export default function Apply() {
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Handle text inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Centralized file handling
  const handleFile = (selectedFile) => {
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) { // 5MB Limit
      setFile(selectedFile);
    } else {
      alert("Please upload a file smaller than 5MB");
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    handleFile(droppedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload your resume");
    
    // Simulate API Call
    console.log("Submitting:", { ...formData, file });
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-sans text-zinc-900 selection:bg-yellow-500/30">
      <div className="absolute left-[8%] top-28 h-44 w-44 rounded-full border border-yellow-500/25 blur-sm" />
      <div className="absolute bottom-10 right-[10%] h-36 w-36 rotate-12 rounded-2xl bg-yellow-500/10 blur-2xl" />

      <ServiceHero
        eyebrow="Careers"
        titlePrefix="Join Our"
        titleAccent="Growth"
        description="We review every application personally within 48 hours. Let's build something meaningful together."
        imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        imageAlt="Modern Office"
      />

      {/* Form Section */}
      <section className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          
          <article className="lg:col-span-7">
            <div className="h-full rounded-xl border border-zinc-200 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-12 transition-all">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-emerald-500/15 p-6 text-emerald-400 shadow-inner shadow-emerald-500/10">
                    <FaCheckCircle size={64} />
                  </div>
                  <h2 className="mt-8 text-3xl font-bold text-zinc-900">Application Received!</h2>
                  <p className="mt-3 text-lg text-zinc-600">Check your email for the next steps.</p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFile(null); }}
                    className="mt-10 cursor-pointer font-bold text-yellow-500 transition-colors hover:text-yellow-400"
                  >
                    ← Submit another response
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-zinc-900">Application Details</h2>
                    <p className="mt-1 text-zinc-500">Complete the form below to start your journey.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="ml-1 text-sm font-bold text-zinc-700">Full Name</label>
                        <input
                          required
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Jane Cooper"
                          className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-yellow-500/20 transition focus:border-yellow-500 focus:ring-4"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="ml-1 text-sm font-bold text-zinc-700">Email Address</label>
                        <input
                          required
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com"
                          className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-yellow-500/20 transition focus:border-yellow-500 focus:ring-4"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="ml-1 text-sm font-bold text-zinc-700">Upload Resume / CV</p>
                      <label
                        htmlFor="cv"
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={onDrop}
                        className={`group relative flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed px-6 py-12 transition-all duration-300
                          ${isDragging 
                            ? 'scale-[1.01] border-yellow-500 bg-yellow-500/10' 
                            : 'border-zinc-300 bg-white/80 hover:border-yellow-500/40 hover:bg-white'}`}
                      >
                        <div className={`rounded-2xl p-4 transition-colors ${file ? 'bg-emerald-500/15 text-emerald-400' : 'bg-yellow-500/10 text-yellow-500'}`}>
                          {file ? <FaCheckCircle size={28} /> : <FaFileUpload size={28} />}
                        </div>
                        
                        <div className="text-center">
                          <span className="text-base font-bold text-zinc-900">
                            {file ? 'File ready to upload' : 'Click or drop your CV here'}
                          </span>
                          <p className="mt-1 text-xs text-zinc-500">PDF, DOCX up to 5MB</p>
                        </div>

                        {file && (
                          <div className="mt-2 flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white">
                            <span>{file.name}</span>
                            <button 
                              type="button"
                              onClick={(e) => { e.preventDefault(); setFile(null); }}
                              className="cursor-pointer hover:text-red-400"
                            >
                              <FaTimes />
                            </button>
                          </div>
                        )}
                      </label>
                      <input 
                        id="cv" 
                        type="file" 
                        accept=".pdf,.doc,.docx" 
                        onChange={(e) => handleFile(e.target.files[0])} 
                        className="hidden" 
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 py-5 text-base font-bold text-zinc-950 transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.35)] active:scale-[0.99]"
                    >
                      <span>Submit Application</span>
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </article>

          {/* Sidebar Info */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-xl backdrop-blur-md">
              <div className="aspect-4/3 overflow-hidden rounded-xl shadow-inner">
                <img 
                  src="https://stmcz.co.uk/img/about-2.jpg" 
                  alt="Team collaboration" 
                  className="h-full w-full object-cover grayscale-20 transition-all duration-700 hover:scale-105 hover:grayscale-0" 
                />
              </div>
              
              <div className="mt-8 space-y-6 px-2 pb-2">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-zinc-900 shadow-lg shadow-yellow-500/20">
                    <FaShieldAlt size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">Privacy First</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">Your information is encrypted and only accessible by our recruitment leads.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-linear-to-br from-zinc-100 to-transparent p-7">
                  <h4 className="text-xs font-black uppercase tracking-widest text-yellow-500">The Process</h4>
                  <ul className="mt-5 space-y-4">
                    {[
                      { id: '01', text: 'CV Screening by HR' },
                      { id: '02', text: 'Cultural Fit Interview' },
                      { id: '03', text: 'Technical Assessment' }
                    ].map((step) => (
                      <li key={step.id} className="flex items-center gap-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold text-zinc-700 shadow-sm ring-1 ring-zinc-200">
                          {step.id}
                        </span>
                        <span className="text-sm font-semibold text-zinc-800">{step.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </section>
    </main>
  );
}