import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-sans text-zinc-900 selection:bg-yellow-500/30">
      {/* Hero */}
      <header className="relative flex h-screen w-full items-center justify-center overflow-hidden border-b border-zinc-200 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
            alt="Contact STMCZ"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-zinc-950/75 to-zinc-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20">
          <span className="inline-block rounded-full bg-zinc-900/50 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 ring-1 ring-yellow-500/30 backdrop-blur-md">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Let&apos;s <span className="bg-linear-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Start a Conversation</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Reach out with your idea, project, or question. Our team will respond promptly.
          </p>
          <a
            href="#get-in-touch"
            className="mt-10 inline-flex items-center rounded-full bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 px-7 py-3 text-sm font-bold text-zinc-950 transition hover:shadow-[0_0_24px_rgba(234,179,8,0.35)]"
          >
            Get In Touch
          </a>
        </div>
      </header>

      {/* Contact Section */}
      <section id="get-in-touch" className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-2xl sm:p-10">
              <h2 className="text-3xl font-black text-zinc-900">Get In Touch</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                We are here to help with consulting, project delivery, and strategic support.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-zinc-950">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.18em] text-zinc-700">Address</h3>
                    <p className="mt-1 text-sm leading-7 text-zinc-600">
                      32 Selkirk Grove, Bletchley, Milton Keynes, England, MK3 7NL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-zinc-950">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.18em] text-zinc-700">Call Us</h3>
                    <a href="tel:+447468970600" className="mt-1 block text-sm text-zinc-600 transition hover:text-zinc-900">
                      +447468970600
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-zinc-950">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.18em] text-zinc-700">Email Us</h3>
                    <a href="mailto:info@stmcz.com" className="mt-1 block text-sm text-zinc-600 transition hover:text-zinc-900">
                      info@stmcz.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-2xl sm:p-10">
              <h2 className="text-2xl font-black text-zinc-900">Send a Message</h2>
              <p className="mt-2 text-sm text-zinc-500">Tell us what you need and we will get back to you shortly.</p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-zinc-700">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Cooper"
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-yellow-500/20 transition focus:border-yellow-500 focus:ring-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-zinc-700">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-yellow-500/20 transition focus:border-yellow-500 focus:ring-4"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-bold text-zinc-700">Project</label>
                  <input
                    id="project"
                    type="text"
                    placeholder="Website redesign and PM support"
                    className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-yellow-500/20 transition focus:border-yellow-500 focus:ring-4"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-zinc-700">Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell us about your goals, timeline, and priorities..."
                    className="w-full resize-none rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none ring-yellow-500/20 transition focus:border-yellow-500 focus:ring-4"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-br from-yellow-600 via-yellow-500 to-yellow-400 px-7 py-3 text-sm font-bold text-zinc-950 transition hover:shadow-[0_0_24px_rgba(234,179,8,0.35)]"
                >
                  Send Message
                  <FaPaperPlane size={12} />
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4912.038077245287!2d-0.751314!3d52.006531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487655467a881965%3A0xd69183724135bec0!2s32%20Selkirk%20Grove%2C%20Bletchley%2C%20Milton%20Keynes%20MK3%207NL%2C%20UK!5e0!3m2!1sen!2sus!4v1776154713171!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-105 w-full"
            title="STMCZ Office Location"
          />
        </div>
      </section>
    </main>
  )
}