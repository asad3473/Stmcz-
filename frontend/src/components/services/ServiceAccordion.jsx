import React from 'react'
import { FaArrowRight, FaCheckCircle, FaChevronDown } from 'react-icons/fa'

const serviceSurfaces = {
  amber: 'from-[#664A00]/12 via-[#664A00]/6 to-transparent border-[#664A00]/25',
  teal: 'from-[#664A00]/12 via-[#664A00]/6 to-transparent border-[#664A00]/25',
  violet: 'from-[#664A00]/12 via-[#664A00]/6 to-transparent border-[#664A00]/25',
}

export default function ServiceAccordion({ section, isOpen, onToggle }) {
  const Icon = section.icon

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white/85 shadow-[0_20px_60px_rgba(102,74,0,0.12)] backdrop-blur ${serviceSurfaces[section.accent] ?? serviceSurfaces.amber}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${section.id}-content`}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[#664A00]/8 sm:px-6"
      >
        <div className="flex items-center gap-4">
          <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${section.iconTone} bg-[#664A00]/10 text-xl text-[#664A00] shadow-lg`}>
            <Icon />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#664A00]/80">{section.kicker}</p>
            <h3 className="mt-1 text-xl font-semibold text-[#3A2A00] sm:text-2xl">{section.title}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#664A00]/85 sm:text-base">{section.summary}</p>
          </div>
        </div>

        <span className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#664A00]/30 bg-[#664A00]/10 text-[#664A00] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <FaChevronDown />
        </span>
      </button>

      {isOpen && (
        <div id={`${section.id}-content`} className="border-t border-[#664A00]/25 px-5 py-6 sm:px-6">
          <p className="max-w-4xl text-sm leading-7 text-[#664A00]/85 sm:text-base">{section.description}</p>

          {section.mode === 'tiers' ? (
            <>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {section.tiers.map((tier) => (
                  <div key={tier.name} className="rounded-2xl border border-[#664A00]/25 bg-[#FFFDF7] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-lg font-semibold text-[#3A2A00]">{tier.name}</h4>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${tier.badgeTone}`}>
                        {tier.badge}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-[#664A00]/85">
                      {tier.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <FaCheckCircle className="mt-0.5 flex-shrink-0 text-[#664A00]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#664A00]/25 bg-[#FFFDF7] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#664A00]/85">Benefits</h4>
                <div className="mt-4 flex flex-wrap gap-3">
                  {section.benefits.map((benefit) => (
                    <span key={benefit} className="rounded-full border border-[#664A00]/25 bg-white px-4 py-2 text-sm text-[#664A00]">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#664A00]/25 bg-[#FFFDF7] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#664A00]/85">Features</h4>
                <ul className="mt-4 space-y-3 text-sm text-[#664A00]/85">
                  {section.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="mt-0.5 flex-shrink-0 text-[#664A00]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#664A00]/25 bg-[#FFFDF7] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#664A00]/85">Process Flow</h4>
                <div className="mt-4 space-y-3">
                  {section.process.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#664A00]/20 bg-white px-4 py-3 text-sm text-[#664A00]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#664A00]/30 bg-[#664A00]/10 text-xs font-semibold text-[#664A00]">{index + 1}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#664A00]/25 bg-[#FFFDF7] p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#664A00]/85">Benefits</h4>
                <ul className="mt-4 space-y-3 text-sm text-[#664A00]/85">
                  {section.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaArrowRight className="mt-0.5 flex-shrink-0 text-[#664A00]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}