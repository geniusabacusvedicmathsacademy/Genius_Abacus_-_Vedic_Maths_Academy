import { Lightbulb, DollarSign, Users, TrendingUp, ShieldCheck, BookMarked, ArrowRight, Phone, Mail } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function FranchiseSection() {
  useScrollAnimation();

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Proven Brand",
      description: "Proven success with 1000+ students trained",
    },
    {
      icon: <BookMarked className="w-8 h-8" />,
      title: "Complete Syllabus",
      description: "Comprehensive curriculum ready to implement",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Training Support",
      description: "Complete teacher training and certification provided",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Help",
      description: "Marketing materials and strategies to attract students",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Exam Management",
      description: "Official exam conduction and certification system",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Flexible Investment",
      description: "Low initial investment with quick ROI potential",
    },
  ];

  return (
    <section id="franchise" className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-genius-orange opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-genius-yellow opacity-4 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Callout */}
        <div className="bg-gradient-to-r from-genius-navy via-genius-cyan to-genius-orange rounded-3xl p-12 md:p-16 mb-20 text-white overflow-hidden relative soft-shadow-lg reveal">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md mb-6 text-sm font-bold tracking-wider border border-white/20">
              BUSINESS OPPORTUNITY
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Start Your Own Franchise
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed font-medium">
              Teachers across India can use our brand, syllabus, exams, and certification to build a successful educational business. Join our growing network of successful franchisees!
            </p>
            <a
              href="mailto:geniusabacus.vedicmaths.academy@gmail.com?subject=Franchise%20Opportunity"
              className="btn-primary bg-white text-genius-navy hover:text-white hover:bg-genius-navy border-2 border-transparent hover:border-white px-10 py-4 text-lg inline-flex items-center gap-2"
            >
              Become a Franchise Partner
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-5xl font-bold text-center text-genius-navy mb-16 reveal">What We Provide</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-3d text-center group relative overflow-hidden reveal"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(10px)",
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-genius-orange to-genius-red opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-genius-orange to-genius-red flex items-center justify-center text-white mx-auto mb-6 soft-shadow group-hover:scale-110 transition-transform duration-300 text-3xl shadow-lg">
                    {benefit.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-genius-navy mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & Investment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Requirements */}
          <div
            className="card-3d reveal"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 className="text-3xl font-bold text-genius-navy mb-8">Franchise Requirements</h3>
            <ul className="space-y-4">
              {[
                "Educational background (Teacher/Educator preferred)",
                "Passion for child education and development",
                "Basic business acumen and willingness to learn",
                "Initial capital for setup and operations",
                "Dedication to quality education delivery",
                "Willingness to follow curriculum standards",
              ].map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-genius-green to-genius-cyan text-white flex items-center justify-center flex-shrink-0 text-sm font-bold group-hover:scale-110 transition-transform duration-300 shadow-sm">✓</div>
                  <span className="text-gray-700 group-hover:text-genius-navy transition-colors duration-300 font-medium">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Details */}
          <div
            className="card-3d reveal"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(10px)",
              transitionDelay: "0.2s"
            }}
          >
            <h3 className="text-3xl font-bold text-genius-navy mb-8">Investment Details</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-genius-orange to-genius-red rounded-2xl text-white soft-shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <p className="text-sm opacity-80 font-semibold mb-1">Lifetime Franchise Fee</p>
                <p className="text-4xl font-bold">₹15,000</p>
                <p className="text-xs opacity-70 mt-1">One-time payment</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-genius-cyan to-genius-green rounded-2xl text-white soft-shadow hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <p className="text-sm opacity-80 font-semibold mb-2">What's Included</p>
                <ul className="text-sm space-y-2">
                  <li>✓ Complete Syllabus & Materials</li>
                  <li>✓ Teacher Training & Certification</li>
                  <li>✓ Official Exam Conduction Rights</li>
                  <li>✓ Lifetime Brand Support</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 text-center italic">
                * Zero hidden charges. No royalty fees.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 reveal">
          <h3 className="text-3xl font-bold text-genius-navy mb-4">Ready to Transform Your Career?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our franchise network and build a sustainable, profitable business while making a positive impact on children's education
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918626034608"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href="mailto:geniusabacus.vedicmaths.academy@gmail.com"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
