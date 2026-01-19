import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../components/sections/ContactSection";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Contact Genius Abacus & Vedic Maths Academy"
        description="Get in touch with Genius Abacus & Vedic Maths Academy for admissions, demo classes, or franchise inquiries."
        canonicalUrl="/contact"
      />
      <ContactSection />

      {/* Additional Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Connect With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're here to answer all your questions about our programs, enrollment, and services. Reach out using any of the methods below.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 btn-primary">
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
