import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FranchiseSection from "../components/sections/FranchiseSection";
import SEO from "../components/SEO";

export default function Franchise() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Start an Abacus & Vedic Maths Franchise in India | Genius Academy"
        description="Partner with Genius Academy to start your own abacus and vedic maths franchise. Proven curriculum, training, and support."
        canonicalUrl="/franchise"
      />
      <FranchiseSection />

      {/* Additional Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Ready to Become a Partner?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our network of successful franchisees and build a thriving educational business. Contact our franchise team for personalized consultation and detailed information packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918626034608" className="inline-flex items-center gap-2 btn-primary">
                Call Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="mailto:geniusabacus.vedicmaths.academy@gmail.com" className="inline-flex items-center gap-2 btn-outline">
                Email Us
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/" className="inline-flex items-center gap-2" style={{ padding: '0.75rem 2rem', border: '2px solid hsl(220 95% 18%)', color: 'hsl(220 95% 18%)', fontWeight: 'bold', borderRadius: '0.5rem', cursor: 'pointer', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
