import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 font-sans shadow-xl">
      {/* MAIN NAVBAR */}
      <nav className="bg-white py-4 px-[5%] flex items-center justify-between border-b border-gold/10">
        
        {/* LOGO SECTION */}
        <Link to="/" className="group flex flex-col transition-transform active:scale-95">
          <h1 className="text-[#B8860B] (gold) text-2xl tracking-[0.2em] font-black m-0 leading-tight group-hover:text-gold-light transition-colors">
            STMCZ
          </h1>
          <p className="text-black text-[10px] uppercase tracking-widest m-0 opacity-70 font-bold">
            Dual-Discipline Specialists
          </p>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10 m-0 p-0 list-none text-black">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          
          {/* SERVICES DROPDOWN */}
          <li 
            className="relative py-2 group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="flex cursor-pointer items-center gap-1.5 hover:text-[#B8860B] transition-colors font-semibold outline-none"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Services & Support 
              <FaChevronDown size={10} className={`mt-0.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#B8860B]' : ''}`} />
            </button>
            
            {/* DROPDOWN MENU - With "Bridge" padding to prevent closing on gap move */}
            <div className={`
              absolute top-full -left-4 w-60 pt-4 transition-all duration-300
              ${isDropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'}
            `}>
              <ul className="bg-white border-t-2 border-[#B8860B] py-2 shadow-2xl rounded-b-lg overflow-hidden">
                <DropdownLink to="/apply">Apply</DropdownLink>
                <DropdownLink to="/employee-support">Employee Support</DropdownLink>
                <DropdownLink to="/tiered-system">Tiered System</DropdownLink>
              </ul>
            </div>
          </li>

          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden cursor-pointer text-[#B8860B] p-2 hover:bg-[#B8860B]/10 rounded-lg transition-colors" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`
        fixed inset-0 bg-white z-[-1] md:hidden transition-all duration-500 ease-in-out
        ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-24 px-8 pb-10 overflow-y-auto">
           <ul className="flex flex-col gap-8 text-2xl text-black list-none p-0 font-bold">
             <li><MobileLink to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} /></li>
             <li><MobileLink to="/about" label="About" onClick={() => setIsMobileMenuOpen(false)} /></li>
             
             <li className="border-t border-gold/20 pt-6">
                <span className="text-[#B8860B] text-xs uppercase tracking-widest mb-4 block font-black">Services & Support</span>
                <ul className="flex flex-col gap-6 pl-4 border-l-2 border-gold/20">
                  <li><MobileLink to="/apply" label="Apply" onClick={() => setIsMobileMenuOpen(false)} /></li>
                  <li><MobileLink to="/employee-support" label="Employee Support" onClick={() => setIsMobileMenuOpen(false)} /></li>
                  <li><MobileLink to="/tiered-system" label="Tiered System" onClick={() => setIsMobileMenuOpen(false)} /></li>
                </ul>
             </li>

             <li className="border-t border-gold/20 pt-6">
               <MobileLink to="/contact" label="Contact" onClick={() => setIsMobileMenuOpen(false)} />
             </li>
             <li>
               <MobileLink to="/blog" label="Blog" onClick={() => setIsMobileMenuOpen(false)} />
             </li>
           </ul>
        </div>
      </div>
    </header>
  );
};

/* --- HELPER COMPONENTS --- */

const NavLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="relative py-2 font-semibold transition-colors hover:text-[#B8860B] group block"
    >
      {children}
      {/* Left-to-Right Underline Animation */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B8860B] transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  </li>
);

const DropdownLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="block px-6 py-3 text-sm text-black font-medium hover:bg-[#B8860B]/10 hover:text-[#B8860B] transition-all"
    >
      {children}
    </Link>
  </li>
);

const MobileLink = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="hover:text-[#B8860B] transition-colors block w-full active:translate-x-2 transition-transform"
  >
    {label}
  </Link>
);

export default Navbar;