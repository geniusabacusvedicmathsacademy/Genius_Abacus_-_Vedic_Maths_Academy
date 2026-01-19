import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-genius-navy text-white pt-10 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧮</span>
              <h3 className="text-xl font-bold text-white font-heading">Genius Academy</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation with mental mathematics mastery. India's #1 trusted institute for Abacus and Vedic Maths.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/courses" className="hover:text-genius-orange transition-colors">Our Courses</Link></li>
              <li><Link to="/levels" className="hover:text-genius-orange transition-colors">Levels & Structure</Link></li>
              <li><Link to="/online-classes" className="hover:text-genius-orange transition-colors">Online Classes</Link></li>
              <li><Link to="/franchise" className="hover:text-genius-orange transition-colors">Franchise Opportunities</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-genius-yellow">Contact</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-genius-cyan flex-shrink-0" />
                <a href="tel:+918626034608" className="hover:text-genius-cyan transition break-all">+91 8626034608</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-genius-cyan flex-shrink-0" />
                <span>Jalna, Maharashtra</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-genius-cyan flex-shrink-0" />
                <a href="mailto:geniusabacus.vedicmaths.academy@gmail.com" className="hover:text-genius-cyan transition break-all text-xs">geniusabacus.vedicmaths.academy@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-genius-yellow">Follow Us</h3>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://www.facebook.com/share/1NneQYDJe1/" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/geniusabacusvedicmathsacademy?igsh=b2dqOXVxZ292bjcz" target="_blank" rel="noopener noreferrer" className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:opacity-80 transition">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            <p>© {currentYear} Genius Abacus & Vedic Maths Academy. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6 sm:justify-center">
              <a href="#privacy" className="hover:text-genius-cyan transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-genius-cyan transition">Terms & Conditions</a>
            </div>
            <p className="sm:text-right">Designed with ❤️ for education</p>
          </div>
        </div>

        {/* SEO Meta Text - hidden on mobile */}
        <div className="hidden sm:block text-xs text-gray-500 bg-gray-900 p-3 sm:p-4 rounded-lg">
          <p className="font-semibold text-gray-400 text-xs">Best Abacus Class | Number 1 Abacus Institute | Vedic Maths Classes | Online & Offline Training | Mental Mathematics | Speed Calculation | Certified Teachers | Level-wise Exams | Abacus Franchise India</p>
        </div>
      </div>
    </footer>
  );
}
