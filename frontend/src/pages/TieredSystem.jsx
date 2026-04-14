import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaCrown, FaGem, FaHeadset, FaLayerGroup } from 'react-icons/fa';
import ServiceHero from '../components/services/ServiceHero'

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
    <main className="relative min-h-screen overflow-hidden bg-white font-sans text-zinc-900 selection:bg-yellow-500/30">
      <div className="absolute left-[8%] top-32 h-44 w-44 rounded-full border border-yellow-500/20 blur-sm" />
      <div className="absolute bottom-14 right-[9%] h-32 w-32 rotate-12 rounded-2xl bg-yellow-500/5 blur-2xl" />

      <ServiceHero
        eyebrow="Tiered System"
        titlePrefix="Choose Your"
        titleAccent="Package"
        description="Select from our carefully crafted service tiers designed to meet your specific requirements and budget."
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
        imageAlt="Tiered services"
      />

      <section className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <div className="h-full rounded-xl border border-zinc-200 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-zinc-900">Tier Comparison</h2>
                <p className="mt-1 text-zinc-500">Select a package to view pricing, includes, and target audience.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {tiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setActiveTier(tier.id)}
                    className={`rounded-2xl border px-4 py-4 text-left transition cursor-pointer ${
                      activeTier === tier.id
                        ? 'border-zinc-900 bg-zinc-900 text-yellow-400 shadow-lg shadow-zinc-900/20'
                        : 'border-zinc-300 bg-white text-zinc-700 hover:border-yellow-500/40'
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider opacity-80">{tier.badge}</p>
                    <p className="mt-1 text-sm font-bold">{tier.name}</p>
                    <p className="mt-1 text-xs opacity-80">{tier.price}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-bold text-zinc-900">{selectedTier.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-7 text-yellow-500">{selectedTier.tagline}</p>
                <p className="mt-1 text-base font-bold text-zinc-900">{selectedTier.price}</p>

                <p className="mt-5 text-xs font-black uppercase tracking-widest text-yellow-500">Includes</p>

                <ul className="mt-6 space-y-3">
                  {selectedTier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                      <FaCheckCircle className="mt-1 text-yellow-500" />
                      <span className="text-sm font-medium text-zinc-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-zinc-200 bg-white px-4 py-3">
                  <p className="text-xs font-black uppercase tracking-widest text-yellow-500">Target</p>
                  <p className="mt-1 text-sm text-zinc-800">{selectedTier.target}</p>
                </div>

                <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:shadow-[0_0_24px_rgba(234,179,8,0.35)]">
                  Choose This Tier <FaArrowRight />
                </button>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-5 space-y-6">
            <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-xl backdrop-blur-md">
              <div className="aspect-4/3 overflow-hidden rounded-xl shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Business planning"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>

              <div className="mt-8 space-y-6 px-2 pb-2">
                <div className="flex gap-5 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-zinc-900 shadow-lg shadow-yellow-500/20">
                    <FaLayerGroup size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">Scalable Structure</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">Start simple and upgrade support as your needs grow.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-linear-to-br from-zinc-100 to-transparent p-7">
                  <h4 className="text-xs font-black uppercase tracking-widest text-yellow-500">Need Help Choosing?</h4>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-700">
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
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[12px] text-zinc-700 shadow-sm ring-1 ring-zinc-200">
                            <Icon />
                          </span>
                          <span className="text-sm font-semibold text-zinc-800">{item.text}</span>
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
