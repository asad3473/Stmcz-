import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaHeadset, FaUserShield, FaUsers } from 'react-icons/fa';
import ServiceHero from '../components/services/ServiceHero'

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
    <main className="relative min-h-screen overflow-hidden bg-white font-sans text-zinc-900 selection:bg-yellow-500/30">
      <div className="absolute left-[6%] top-36 h-40 w-40 rounded-full border border-yellow-500/20 blur-sm" />
      <div className="absolute bottom-12 right-[8%] h-32 w-32 rotate-12 rounded-2xl bg-yellow-500/5 blur-2xl" />

      <ServiceHero
        eyebrow="Employee Support"
        titlePrefix="Support That Keeps Teams"
        titleAccent="Moving"
        description="From onboarding to compliance, we provide practical guidance that improves employee confidence and productivity."
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
        imageAlt="Employee support"
      />

      <section className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <div className="h-full rounded-xl border border-zinc-200 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900">How We Support Employees</h2>
                <p className="mt-1 text-zinc-500">Choose a support area to view details.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {supportTracks.map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => setActiveTrack(track.id)}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition cursor-pointer ${
                      activeTrack === track.id
                        ? 'border-zinc-900 bg-zinc-900 text-yellow-400 shadow-lg shadow-zinc-900/20'
                        : 'border-zinc-300 bg-white text-zinc-700 hover:border-yellow-500/40'
                    }`}
                  >
                    {track.title}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-bold text-zinc-900">{currentTrack.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-500">{currentTrack.details}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    'Employee registration and profile setup',
                    'Needs assessment and support plan',
                    'Continuous guidance and issue tracking',
                    'Escalation support when needed',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                      <FaCheckCircle className="mt-1 text-yellow-600" />
                      <p className="text-sm text-zinc-800">{item}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:shadow-[0_0_24px_rgba(234,179,8,0.35)]">
                  Get Support Plan <FaArrowRight />
                </button>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-xl backdrop-blur-md">
              <div className="aspect-4/3 overflow-hidden rounded-xl shadow-inner">
                <img
                  src="https://stmcz.co.uk/img/about-3.jpg"
                  alt="Support team"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-8 space-y-6 px-2 pb-2">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-zinc-900 shadow-lg shadow-yellow-500/20">
                    <FaHeadset size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">Fast Response</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">Dedicated support channels for quick employee issue resolution.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-linear-to-br from-zinc-100 to-transparent p-7">
                  <h4 className="text-xs font-black uppercase tracking-widest text-yellow-500">Key Benefits</h4>
                  <ul className="mt-5 space-y-4">
                    {[
                      { icon: FaUsers, text: 'Better employee satisfaction' },
                      { icon: FaUserShield, text: 'Improved compliance confidence' },
                      { icon: FaCheckCircle, text: 'Higher operational productivity' },
                    ].map((benefit) => {
                      const Icon = benefit.icon;
                      return (
                        <li key={benefit.text} className="flex items-center gap-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] text-zinc-700 shadow-sm ring-1 ring-zinc-200">
                            <Icon />
                          </span>
                          <span className="text-sm font-semibold text-zinc-800">{benefit.text}</span>
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
