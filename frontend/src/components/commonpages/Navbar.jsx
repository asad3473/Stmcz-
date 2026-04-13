import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 font-sans shadow-2xl">
      {/* TOP INFO BAR */}
      {/* <div className="bg-dark-header text-black py-2 px-[5%] flex justify-end text-xs border-b border-gold/20">
        <div className="flex items-center gap-4">
          <span className="opacity-80">Have any questions?</span>
          <a href="tel:+447468970600" className="text-gold font-bold flex items-center gap-1.5 hover:text-gold-light transition-colors">
            <FaPhoneAlt size={10} /> Call: +447468970600
          </a>
        </div>
      </div> */}

      {/* MAIN NAVBAR */}
      <nav className="bg-dark-body py-4 px-[5%] flex md:justify-around justify-between items-center">
        {/* LOGO / TITLE */}
        <Link to="/" className="group">
          <h1 className="text-gold text-2xl tracking-[0.2em] font-black m-0 leading-tight group-hover:text-gold-light transition-colors">
            STMCZ
          </h1>
          <p className="text-black text-[10px] uppercase tracking-widest m-0 opacity-90">
            Dual-Discipline Specialists
          </p>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8 m-0 p-0 list-none text-black">
          <li><Link to="/" className="hover:text-gold transition-colors font-medium">Home</Link></li>
          <li><Link to="/about" className="hover:text-gold transition-colors font-medium">About</Link></li>
          
          {/* SERVICES DROPDOWN */}
          <li 
            className="relative cursor-pointer py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-gold transition-colors font-medium">
              Services & Support <FaChevronDown size={10} className={`mt-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {/* DROPDOWN MENU */}
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 w-56 bg-dark-header border-t-2 border-gold py-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                <li><Link to="/apply" className="block px-6 py-3 text-sm hover:bg-gold hover:text-black transition-all">Apply</Link></li>
                <li><Link to="/employee-support" className="block px-6 py-3 text-sm hover:bg-gold hover:text-black transition-all">Employee Support</Link></li>
                <li><Link to="/tiered-system" className="block px-6 py-3 text-sm hover:bg-gold hover:text-black transition-all">Tiered System</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-gold transition-colors font-medium">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-gold transition-colors font-medium">Blog</Link></li>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden text-gold cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-header border-t border-gold/20 p-5 animate-in slide-in-from-right w-full">
           <ul className="flex flex-col gap-4 text-black list-none p-0">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li className="text-gold font-bold">Services & Support:</li>
              <li className="pl-4"><Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>Apply</Link></li>
              <li className="pl-4"><Link to="/employee-support" onClick={() => setIsMobileMenuOpen(false)}>Employee Support</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
           </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;