import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Mail } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Levels", path: "/levels" },
    { name: "Online Classes", path: "/online-classes" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 font-sans transition-all duration-300">
      {/* BRAND STRIP (Above Navbar for Authority) */}
      <div className={`bg-gradient-to-r from-blue-900 to-blue-800 text-white transition-all duration-300 ${scrolled ? 'h-0 py-0 overflow-hidden' : 'py-2'} block`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm font-medium tracking-wide">
          {/* Centered on mobile, Left on Desktop */}
          <p className="w-full text-center md:w-auto md:text-left">
            India's #1 Trusted Abacus & Vedic Maths Institute
          </p>

          {/* Email hidden on mobile to prevent clutter */}
          <div className="hidden md:flex gap-4">
            <a href="mailto:geniusabacus.vedicmaths.academy@gmail.com" className="hover:text-genius-orange transition-colors">
              geniusabacus.vedicmaths.academy@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={`bg-white transition-all duration-300 ${scrolled ? "shadow-lg py-2" : "shadow-md py-4"
          }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">

            {/* SINGLE COMPOSITE LOGO CONTAINER */}
            <div className="flex-shrink-0 flex items-center justify-start w-auto md:w-[25%]">
              <Link to="/" className="block group">
                <img
                  src="/genius-header-logo.png"
                  alt="Genius Abacus & Vedic Maths Academy"
                  className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* CENTER: Navigation Menu (Hidden on Mobile) */}
            <div className="hidden md:flex items-center justify-center gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-bold tracking-tight relative group transition-colors duration-300 px-1
                    ${isActive(link.path) ? "text-genius-orange" : "text-genius-navy hover:text-genius-orange"}
                  `}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-genius-orange rounded-full transition-all duration-300 
                      ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  ></span>
                </Link>
              ))}
            </div>

            {/* RIGHT: CTA Actions Only (Logo Removed) */}
            <div className="hidden md:flex items-center justify-end gap-4 w-[25%] md:w-[25%]">
              <div className="flex flex-col gap-2 items-end">
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/918626034608"
                    className="p-2 bg-genius-green text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 btn-glow"
                    title="WhatsApp Us"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+918626034608"
                    className="p-2 bg-genius-orange text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 btn-glow"
                    title="Call Us"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* MOBILE ONLY ICONS (WhatsApp + Call) */}
            <div className="flex md:hidden items-center gap-3 mr-2">
              <a
                href="https://wa.me/918626034608"
                className="p-2 bg-genius-green text-white rounded-full hover:scale-110 transition-transform btn-glow"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+918626034608"
                className="p-2 bg-genius-orange text-white rounded-full hover:scale-110 transition-transform btn-glow"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden p-2 text-genius-navy hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-bold p-3 rounded-xl transition-all
                   ${isActive(link.path)
                    ? "bg-orange-50 text-genius-orange pl-6"
                    : "text-genius-navy hover:bg-gray-50 hover:pl-6"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
              <a
                href="tel:+918626034608"
                className="flex items-center justify-center gap-2 py-3 bg-genius-orange text-white font-bold rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="https://wa.me/918626034608"
                className="flex items-center justify-center gap-2 py-3 bg-genius-green text-white font-bold rounded-xl"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
