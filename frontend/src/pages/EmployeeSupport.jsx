import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaHeadset, FaUserShield, FaUsers } from 'react-icons/fa';

const supportTracks = [
  {
    id: 'onboarding',
    title: 'Onboarding Assistance',
    details: 'Step-by-step onboarding support for documents, policies, and process readiness.',
  },
  {
    id: 'hr',
    title: 'HR Guidance',
    details: 'Practical support for HR communication, policy understanding, and daily issues.',
  },
  {
    id: 'compliance',
    title: 'Compliance Resolution',
    details: 'Fast response for documentation, compliance concerns, and internal escalations.',
  },
];

export default function EmployeeSupport() {
  const [activeTrack, setActiveTrack] = useState('onboarding');

  const currentTrack = supportTracks.find((track) => track.id === activeTrack) ?? supportTracks[0];

  return (
    <main className="relative min-h-screen bg-[#FFF9EB] text-[#2F2200] selection:bg-[#664A00]/20 font-sans">
      <header className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden border-b border-[#664A00]/10 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
            className="h-full w-full object-cover"
            alt="Employee support"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3A2A00]/90 via-[#664A00]/85 to-[#2F2200]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/20">
            Employee Support
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">
            Support That Keeps Teams <span className="text-[#FFD666]">Moving</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            From onboarding to compliance, we provide practical guidance that improves employee confidence and productivity.
          </p>
        </div>
      </header>

      <section className="relative z-20 mx-auto -mt-20 w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <div className="h-full rounded-[2.5rem] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#3A2A00]">How We Support Employees</h2>
                <p className="mt-1 text-[#664A00]/60">Choose a support area to view details.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {supportTracks.map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setActiveTrack(track.id)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition cursor-pointer ${
                      activeTrack === track.id
                        ? 'border-[#664A00] bg-[#664A00] text-white shadow-lg shadow-[#664A00]/20'
                        : 'border-[#664A00]/20 bg-white text-[#664A00] hover:border-[#664A00]/40'
                    }`}
                  >
                    {track.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] border border-[#664A00]/15 bg-[#FFFDF7] p-6">
                <h3 className="text-xl font-bold text-[#3A2A00]">{currentTrack.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#664A00]/70">{currentTrack.details}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    'Employee registration and profile setup',
                    'Needs assessment and support plan',
                    'Continuous guidance and issue tracking',
                    'Escalation support when needed',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-[#664A00]/10">
                      <FaCheckCircle className="mt-1 text-[#664A00]" />
                      <p className="text-sm text-[#3A2A00]">{item}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-[#664A00] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4d3800]">
                  Get Support Plan <FaArrowRight />
                </button>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-[2.5rem] border border-white bg-white/40 p-5 shadow-xl backdrop-blur-md">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-inner">
                <img
                  src="https://stmcz.co.uk/img/about-3.jpg"
                  alt="Support team"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-8 space-y-6 px-2 pb-2">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#664A00] text-white shadow-lg shadow-[#664A00]/20">
                    <FaHeadset size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A2A00] text-lg">Fast Response</h3>
                    <p className="text-sm leading-relaxed text-[#664A00]/70">Dedicated support channels for quick employee issue resolution.</p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-br from-[#664A00]/10 to-transparent p-7 border border-[#664A00]/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#664A00]">Key Benefits</h4>
                  <ul className="mt-5 space-y-4">
                    {[
                      { icon: FaUsers, text: 'Better employee satisfaction' },
                      { icon: FaUserShield, text: 'Improved compliance confidence' },
                      { icon: FaCheckCircle, text: 'Higher operational productivity' },
                    ].map((benefit) => {
                      const Icon = benefit.icon;
                      return (
                        <li key={benefit.text} className="flex items-center gap-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] text-[#664A00] shadow-sm">
                            <Icon />
                          </span>
                          <span className="text-sm font-semibold text-[#3A2A00]">{benefit.text}</span>
                        </li>
                      );
                    })}
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
