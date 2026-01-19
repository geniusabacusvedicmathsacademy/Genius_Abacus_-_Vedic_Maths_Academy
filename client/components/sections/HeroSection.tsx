import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function HeroSection() {
  useScrollAnimation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50">
      {/* Background Decor (Subtle Gradient Mesh) */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/50 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-200/50 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">

          {/* BADGE: Trusted */}
          <div className="inline-block mb-6 reveal">
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-genius-navy font-bold text-sm tracking-wide border border-blue-200 shadow-sm">
              🏆 India's #1 Trusted Abacus Institute
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-genius-navy mb-6 leading-tight tracking-tight reveal text-shadow-lg">
            Best Abacus & Vedic Maths <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-genius-orange to-genius-red relative">
              Academy for Kids
              {/* Underline Decoration */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-genius-orange opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8 reveal" style={{ transitionDelay: "0.2s" }}>
            Unlock your child's potential with
            <span className="text-genius-navy font-bold"> Abacus</span> &
            <span className="text-genius-navy font-bold"> Vedic Maths</span>.
            <br className="hidden md:block" />
            Master calculation speed, boost confidence, and excel in academics.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 reveal" style={{ transitionDelay: "0.4s" }}>
            <a
              href="https://wa.me/918626034608?text=Hello%2C%20I%20want%20to%20know%20about%20Abacus%20classes"
              className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+918626034608"
              className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            <a
              href="mailto:geniusabacus.vedicmaths.academy@gmail.com"
              className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Email Info</span>
            </a>
          </div>

          {/* 3D FLOATING SYMBOLS */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-[-1] opacity-50 md:opacity-100">
            {/* PLUS */}
            <div className="absolute top-[5%] md:top-[10%] left-[2%] md:left-[5%] animate-float">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-genius-orange to-red-500 shadow-2xl flex items-center justify-center text-white text-2xl md:text-5xl font-bold transform rotate-[-12deg] border border-white/20 backdrop-blur-sm">
                +
              </div>
            </div>

            {/* MINUS */}
            <div className="absolute top-[15%] md:top-[20%] right-[2%] md:right-[8%] animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-genius-navy shadow-2xl flex items-center justify-center text-white text-2xl md:text-5xl font-bold transform rotate-[10deg] border border-white/20">
                −
              </div>
            </div>

            {/* MULTIPLY */}
            <div className="absolute bottom-[10%] md:bottom-[20%] left-[5%] md:left-[10%] animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-green-400 to-genius-green shadow-xl flex items-center justify-center text-white text-2xl md:text-4xl font-bold transform rotate-[-5deg]">
                ×
              </div>
            </div>

            {/* DIVIDE */}
            <div className="absolute bottom-[12%] md:bottom-[25%] right-[5%] md:right-[15%] animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-10 h-10 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl flex items-center justify-center text-white text-2xl md:text-4xl font-bold transform rotate-[15deg]">
                ÷
              </div>
            </div>
          </div>

          {/* TRUST INDICATORS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200 reveal" style={{ transitionDelay: "0.6s" }}>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-genius-navy">1000+</p>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-genius-orange">100%</p>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Pass Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-genius-green">8+</p>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Levels</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-500">ISO</p>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Certified</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
