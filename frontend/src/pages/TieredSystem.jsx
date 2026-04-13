import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaCrown, FaGem, FaHeadset, FaLayerGroup } from 'react-icons/fa';

const tiers = [
  {
    id: 'insight-brief',
    name: 'Tier 1: Insight Brief',
    badge: 'Entry',
    tagline: 'Clarity without overload',
    price: 'PS3.99 / month',
    target: 'Low-commitment subscribers who want practical insight.',
    features: [
      'Weekly concise PM and BA insights (email)',
      'Executive-level summaries',
      'Early access to selected blog posts',
    ],
  },
  {
    id: 'delivery-insight',
    name: 'Tier 2: Delivery Insight',
    badge: 'Most Popular',
    tagline: 'Where thinking meets execution',
    price: 'PS6.99 / month',
    target: 'Practitioners delivering projects and change (core tier).',
    features: [
      'Full weekly newsletter',
      'Deeper PM and BA analysis',
      'Read more access to blog deep dives',
      'Practical delivery-focused insights',
    ],
  },
  {
    id: 'strategic-insight',
    name: 'Tier 3: Strategic Insight',
    badge: 'Premium',
    tagline: 'For leaders shaping outcomes',
    price: 'PS9.99 / month',
    target: 'Senior professionals, consultants, and leaders.',
    features: [
      'Everything in lower tiers',
      'Monthly long-form strategic articles',
      'Case study analysis',
      'Priority content topics',
    ],
  },
];

export default function TieredSystem() {
  const [activeTier, setActiveTier] = useState('delivery-insight');

  const selectedTier = tiers.find((tier) => tier.id === activeTier) ?? tiers[1];

  return (
    <main className="relative min-h-screen bg-[#FFF9EB] text-[#2F2200] selection:bg-[#664A00]/20 font-sans">
      <header className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden border-b border-[#664A00]/10 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            className="h-full w-full object-cover"
            alt="Tiered services"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3A2A00]/90 via-[#664A00]/85 to-[#2F2200]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md ring-1 ring-white/20">
            Tiered System
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white">
            Choose Your <span className="text-[#FFD666]">Package</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Select from our carefully crafted service tiers designed to meet your specific requirements and budget.
          </p>
        </div>
      </header>

      <section className="relative z-20 mx-auto -mt-20 w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <div className="h-full rounded-[2.5rem] border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-[#3A2A00]">Tier Comparison</h2>
                <p className="mt-1 text-[#664A00]/60">Select a package to view pricing, includes, and target audience.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {tiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setActiveTier(tier.id)}
                    className={`rounded-2xl border px-4 py-4 text-left transition cursor-pointer ${
                      activeTier === tier.id
                        ? 'border-[#664A00] bg-[#664A00] text-white shadow-lg shadow-[#664A00]/20'
                        : 'border-[#664A00]/20 bg-white text-[#664A00] hover:border-[#664A00]/40'
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80">{tier.badge}</p>
                    <p className="mt-1 text-sm font-bold">{tier.name}</p>
                    <p className="mt-1 text-xs opacity-80">{tier.price}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] border border-[#664A00]/15 bg-[#FFFDF7] p-6">
                <h3 className="text-xl font-bold text-[#3A2A00]">{selectedTier.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-[#664A00]">{selectedTier.tagline}</p>
                <p className="mt-1 text-base font-bold text-[#3A2A00]">{selectedTier.price}</p>

                <p className="mt-5 text-xs font-black uppercase tracking-widest text-[#664A00]">Includes</p>

                <ul className="mt-6 space-y-3">
                  {selectedTier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-[#664A00]/10">
                      <FaCheckCircle className="mt-1 text-[#664A00]" />
                      <span className="text-sm font-medium text-[#3A2A00]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-[#664A00]/15 bg-white px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-widest text-[#664A00]">Target</p>
                  <p className="mt-1 text-sm text-[#3A2A00]">{selectedTier.target}</p>
                </div>

                <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-[#664A00] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4d3800]">
                  Choose This Tier <FaArrowRight />
                </button>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-[2.5rem] border border-white bg-white/40 p-5 shadow-xl backdrop-blur-md">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Business planning"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-8 space-y-6 px-2 pb-2">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#664A00] text-white shadow-lg shadow-[#664A00]/20">
                    <FaLayerGroup size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A2A00] text-lg">Scalable Structure</h3>
                    <p className="text-sm leading-relaxed text-[#664A00]/70">Start simple and upgrade support as your needs grow.</p>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-br from-[#664A00]/10 to-transparent p-7 border border-[#664A00]/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#664A00]">Need Help Choosing?</h4>
                  <p className="mt-4 text-sm leading-relaxed text-[#3A2A00]">
                    Not sure which package is right for you? Our team is here to help you make the best decision for your needs.
                  </p>
                  <ul className="mt-5 space-y-4">
                    {[
                      { icon: FaHeadset, text: 'Quick guidance from our team' },
                      { icon: FaGem, text: 'Package fit based on your goals' },
                      { icon: FaCrown, text: 'Clear upgrade path as needs evolve' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.text} className="flex items-center gap-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] text-[#664A00] shadow-sm">
                            <Icon />
                          </span>
                          <span className="text-sm font-semibold text-[#3A2A00]">{item.text}</span>
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
