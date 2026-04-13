import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaChartLine,
  FaClipboardCheck,
  FaPhoneAlt,
  FaFileAlt,
  FaHeadset,
  FaLayerGroup,
  FaUsers,
} from 'react-icons/fa'
import ServiceAccordion from '../components/services/ServiceAccordion'

const sections = [
  {
    id: 'apply',
    kicker: 'Application support',
    title: 'Apply',
    summary: 'Guided application assistance that keeps every step accurate, organized, and on schedule.',
    description:
      'This service helps users complete and submit applications efficiently with professional guidance from the first consultation through final submission.',
    features: [
      'Application form assistance',
      'Document preparation and verification',
      'Error checking and corrections',
      'Submission guidance',
      'Status tracking support',
    ],
    process: [
      'Initial consultation',
      'Document collection',
      'Application preparation',
      'Review and validation',
      'Submission assistance',
    ],
    benefits: ['Reduces errors and delays', 'Saves time', 'Improves approval chances'],
    icon: FaFileAlt,
    iconTone: 'border-[#664A00]/35 text-[#664A00]',
    accent: 'amber',
  },
  {
    id: 'employee-support',
    kicker: 'Employee experience',
    title: 'Employee Support',
    summary: 'Comprehensive support services that help employees stay informed, compliant, and productive.',
    description:
      'Comprehensive support services designed to assist employees throughout their journey with structured guidance and responsive issue resolution.',
    features: [
      'Onboarding assistance',
      'HR support guidance',
      'Issue resolution for documentation and compliance',
      'Communication support',
      'Ongoing advisory services',
    ],
    process: [
      'Employee registration',
      'Needs assessment',
      'Personalized support plan',
      'Continuous assistance',
    ],
    benefits: ['Better employee satisfaction', 'Faster issue resolution', 'Improved productivity'],
    icon: FaUsers,
    iconTone: 'border-[#664A00]/35 text-[#664A00]',
    accent: 'amber',
  },
  {
    id: 'tiered-system',
    kicker: 'Flexible service model',
    title: 'Tiered System',
    summary: 'Scalable service levels that align with your needs, timeline, and budget.',
    description:
      'A flexible service model offering different levels of support based on client needs and budget. Each tier is designed to give you a clear path from basic assistance to fully managed support.',
    mode: 'tiers',
    tiers: [
      {
        name: 'Basic Tier',
        badge: 'Entry',
        badgeTone: 'bg-[#664A00]/10 text-[#664A00] border border-[#664A00]/35',
        items: ['Standard application support', 'Email support', 'Limited consultations'],
      },
      {
        name: 'Standard Tier',
        badge: 'Recommended',
        badgeTone: 'bg-[#664A00]/15 text-[#664A00] border border-[#664A00]/45',
        items: ['Full application assistance', 'Priority email and chat support', 'Document review'],
      },
      {
        name: 'Premium Tier',
        badge: 'White glove',
        badgeTone: 'bg-[#664A00]/20 text-[#4F3900] border border-[#664A00]/50',
        items: ['Dedicated consultant', 'Fast-track processing', '24/7 priority support', 'Full employee support included'],
      },
    ],
    benefits: ['Flexible pricing', 'Scalable solutions', 'Customizable services'],
    icon: FaLayerGroup,
    iconTone: 'border-[#664A00]/35 text-[#664A00]',
    accent: 'amber',
  },
]

const metrics = [
  { value: '3', label: 'service pillars', icon: FaChartLine },
  { value: '24/7', label: 'priority support', icon: FaHeadset },
  { value: '100%', label: 'document review focus', icon: FaClipboardCheck },
]

export default function ServicesPage({
  pageTitle,
  pageSubtitle,
  intro,
  initialOpenSection = 'apply',
}) {
  const [openSection, setOpenSection] = useState(initialOpenSection)

  useEffect(() => {
    setOpenSection(initialOpenSection)
  }, [initialOpenSection])

  return (
    <main className="relative overflow-hidden bg-[#FFF9EB] text-[#2F2200]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(102,74,0,0.18),_transparent_44%),radial-gradient(circle_at_80%_14%,_rgba(102,74,0,0.14),_transparent_32%),linear-gradient(180deg,_#fffdf7,_#fff7e6_54%,_#fdf1d3)]" />
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(120deg,rgba(102,74,0,0.07)_0px,rgba(102,74,0,0.07)_1px,transparent_1px,transparent_34px)] opacity-30" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#664A00]/35 bg-[#664A00]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#664A00]">
              Services & support
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#3A2A00] sm:text-5xl lg:text-6xl">
                {pageTitle}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-[#4D3900]/85 sm:text-lg">
                {pageSubtitle}
              </p>
              <p className="max-w-3xl text-sm leading-7 text-[#664A00]/80 sm:text-base">
                {intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-full bg-[#664A00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A5A00]"
              >
                Get Started <FaArrowRight />
              </Link>
              <a
                href="tel:+447468970600"
                className="inline-flex items-center gap-2 rounded-full border border-[#664A00]/35 bg-white/80 px-5 py-3 text-sm font-semibold text-[#664A00] transition hover:bg-[#664A00]/10"
              >
                Contact Us <FaPhoneAlt />
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-[#664A00]/25 bg-white/80 p-4 shadow-[0_20px_70px_rgba(102,74,0,0.12)] backdrop-blur">
            {metrics.map((metric) => {
              const MetricIcon = metric.icon

              return (
                <div key={metric.label} className="flex items-center justify-between rounded-2xl border border-[#664A00]/20 bg-[#FFFDF7] px-5 py-4">
                  <div>
                    <p className="text-2xl font-semibold text-[#3A2A00] sm:text-3xl">{metric.value}</p>
                    <p className="mt-1 text-sm text-[#664A00]/75">{metric.label}</p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#664A00]/30 bg-[#664A00]/10 text-[#664A00]">
                    <MetricIcon />
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-5">
          {sections.map((section) => (
            <ServiceAccordion
              key={section.id}
              section={section}
              isOpen={openSection === section.id}
              onToggle={() => setOpenSection(openSection === section.id ? '' : section.id)}
            />
          ))}
        </div>

        <section className="rounded-[2rem] border border-[#664A00]/25 bg-white/80 p-6 shadow-[0_20px_70px_rgba(102,74,0,0.12)] backdrop-blur sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#664A00]">Next step</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#3A2A00] sm:text-3xl">Choose the service that fits your needs and let us handle the rest.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#664A00] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A5A00]"
              >
                Get Started <FaArrowRight />
              </Link>
              <a
                href="tel:+447468970600"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#664A00]/35 bg-white/80 px-5 py-3 text-sm font-semibold text-[#664A00] transition hover:bg-[#664A00]/10"
              >
                Contact Us <FaPhoneAlt />
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}