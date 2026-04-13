import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#614F12] text-white/90">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-5 lg:px-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <h3 className="text-3xl font-black tracking-[0.2em] text-white">STMCZ</h3>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            Dual-Discipline Specialists
          </p>
          <p className="mt-6 max-w-sm text-sm leading-8 text-white/70 italic">
         STMCZ is a UK-based consultancy committed to empowering individuals and businesses by delivering strategic guidance, innovative solutions, and expert support designed to drive sustainable growth and long-term success.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/50">Navigation</h4>
          <ul className="mt-6 space-y-4 text-sm font-medium">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/apply">Apply</FooterLink>
            <FooterLink to="/employee-support">Employee Support</FooterLink>
            <FooterLink to="/tiered-system">Tiered System</FooterLink>
          </ul>
        </div>

        {/* Help Links Column */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/50">Help Links</h4>
          <ul className="mt-6 space-y-4 text-sm font-medium">
            <li><a href="#help" className="relative inline-block pb-1 text-white/80 transition-colors hover:text-white group">Help Link<span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" /></a></li>
            <li><a href="#terms" className="relative inline-block pb-1 text-white/80 transition-colors hover:text-white group">Terms Of use<span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" /></a></li>
            <li><a href="#privacy" className="relative inline-block pb-1 text-white/80 transition-colors hover:text-white group">Privacy Policy<span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" /></a></li>
            <li><a href="#faqs" className="relative inline-block pb-1 text-white/80 transition-colors hover:text-white group">FAQs<span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" /></a></li>
            <li><a href="#contact" className="relative inline-block pb-1 text-white/80 transition-colors hover:text-white group">Contact Us<span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" /></a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white/50">Get in Touch</h4>
          <div className="mt-6 space-y-5 text-sm">
            <a href="tel:+447468970600" className="flex items-center gap-4 hover:text-white transition-colors group" id="contact">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <FaPhoneAlt size={12} />
              </div>
              +447468970600
            </a>
            <a href="mailto:info@stmcz.co.uk" className="flex items-center gap-4 hover:text-white transition-colors group">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <FaEnvelope size={12} />
              </div>
              info@stmcz.co.uk
            </a>
            <div className="flex items-center gap-4 text-white/70">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                <FaMapMarkerAlt size={12} />
              </div>
              32 Selkirk Grove, Bletchley, Milton Keynes, England, MK3 7NL
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/10 px-6 py-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
        <p>© {year} STMCZ. Engineered for Excellence.</p>
      </div>
    </footer>
  )
}

/**
 * Reusable Footer Link with Left-to-Right Underline
 */
const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="relative pb-1 text-white/80 transition-colors hover:text-white group inline-block"
    >
      {children}
      {/* Animated Underline */}
      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  </li>
)

export default Footer