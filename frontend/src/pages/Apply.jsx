import React, { useState, useCallback } from 'react';
import { FaArrowRight, FaFileUpload, FaShieldAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';

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
    <main className="relative min-h-screen bg-[#FFF9EB] text-[#2F2200] selection:bg-[#664A00]/20 font-sans">
      {/* Hero Header */}
      <header className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden border-b border-[#664A00]/10 text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            className="h-full w-full object-cover"
            alt="Modern Office"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3A2A00]/90 via-[#664A00]/85 to-[#2F2200]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/20">
            Careers
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">
            Join Our <span className="text-[#FFD666]">Growth</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            We review every application personally within 48 hours. Let's build something meaningful together.
          </p>
        </div>
      </header>

      {/* Form Section */}
      <section className="relative z-20 mx-auto -mt-20 w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          
          <article className="lg:col-span-7">
            <div className="h-full rounded-[2.5rem] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12 transition-all">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="rounded-full bg-green-100 p-6 text-green-600 shadow-inner">
                    <FaCheckCircle size={64} />
                  </div>
                  <h2 className="mt-8 text-3xl font-bold text-[#3A2A00]">Application Received!</h2>
                  <p className="mt-3 text-lg text-[#664A00]/70">Check your email for the next steps.</p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFile(null); }}
                    className="mt-10 cursor-pointer font-bold text-[#664A00] hover:text-[#3A2A00] transition-colors"
                  >
                    ← Submit another response
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-[#3A2A00]">Application Details</h2>
                    <p className="text-[#664A00]/60 mt-1">Complete the form below to start your journey.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-sm font-bold text-[#664A00] ml-1">Full Name</label>
                        <input
                          required
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Jane Cooper"
                          className="w-full rounded-2xl border border-[#664A00]/10 bg-white px-5 py-4 text-sm ring-[#664A00]/5 transition focus:border-[#664A00] focus:ring-4 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-[#664A00] ml-1">Email Address</label>
                        <input
                          required
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com"
                          className="w-full rounded-2xl border border-[#664A00]/10 bg-white px-5 py-4 text-sm ring-[#664A00]/5 transition focus:border-[#664A00] focus:ring-4 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-bold text-[#664A00] ml-1">Upload Resume / CV</p>
                      <label
                        htmlFor="cv"
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={onDrop}
                        className={`group relative flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-[2rem] border-2 border-dashed px-6 py-12 transition-all duration-300
                          ${isDragging 
                            ? 'border-[#664A00] bg-[#664A00]/10 scale-[1.01]' 
                            : 'border-[#664A00]/20 bg-white/50 hover:border-[#664A00]/40 hover:bg-white'}`}
                      >
                        <div className={`rounded-2xl p-4 transition-colors ${file ? 'bg-green-100 text-green-600' : 'bg-[#664A00]/10 text-[#664A00]'}`}>
                          {file ? <FaCheckCircle size={28} /> : <FaFileUpload size={28} />}
                        </div>
                        
                        <div className="text-center">
                          <span className="text-base font-bold text-[#3A2A00]">
                            {file ? 'File ready to upload' : 'Click or drop your CV here'}
                          </span>
                          <p className="mt-1 text-xs text-[#664A00]/60">PDF, DOCX up to 5MB</p>
                        </div>

                        {file && (
                          <div className="mt-2 flex items-center gap-2 rounded-full bg-[#664A00] px-4 py-1.5 text-xs font-medium text-white animate-in slide-in-from-bottom-2">
                            <span>{file.name}</span>
                            <button 
                              type="button"
                              onClick={(e) => { e.preventDefault(); setFile(null); }}
                              className="cursor-pointer hover:text-red-300"
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
                      className="group relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#664A00] py-5 text-base font-bold text-white transition-all hover:bg-[#4d3800] hover:shadow-2xl active:scale-[0.99]"
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
            <div className="overflow-hidden rounded-[2.5rem] border border-white bg-white/40 p-5 shadow-xl backdrop-blur-md">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-inner">
                <img 
                  src="https://stmcz.co.uk/img/about-2.jpg" 
                  alt="Team collaboration" 
                  className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                />
              </div>
              
              <div className="mt-8 space-y-6 px-2 pb-2">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#664A00] text-white shadow-lg shadow-[#664A00]/20">
                    <FaShieldAlt size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A2A00] text-lg">Privacy First</h3>
                    <p className="text-sm leading-relaxed text-[#664A00]/70">Your information is encrypted and only accessible by our recruitment leads.</p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-br from-[#664A00]/10 to-transparent p-7 border border-[#664A00]/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#664A00]">The Process</h4>
                  <ul className="mt-5 space-y-4">
                    {[
                      { id: '01', text: 'CV Screening by HR' },
                      { id: '02', text: 'Cultural Fit Interview' },
                      { id: '03', text: 'Technical Assessment' }
                    ].map((step) => (
                      <li key={step.id} className="flex items-center gap-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#664A00] shadow-sm">
                          {step.id}
                        </span>
                        <span className="text-sm font-semibold text-[#3A2A00]">{step.text}</span>
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