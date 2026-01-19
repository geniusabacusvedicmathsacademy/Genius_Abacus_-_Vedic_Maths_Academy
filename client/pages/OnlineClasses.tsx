import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import OnlineClassesSection from "../components/sections/OnlineClassesSection";
import SEO from "../components/SEO";

export default function OnlineClasses() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Online Abacus & Vedic Maths Classes for Kids | Genius Academy"
        description="Join live online abacus and vedic maths classes with certified teachers. Flexible batches and personalized attention."
        canonicalUrl="/online-classes"
      />
      <OnlineClassesSection />

      {/* Additional Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Class Schedule & Enrollment</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get detailed information about class timings, enrollment process, and special offers. Contact us to start your child's learning journey!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918626034608" className="inline-flex items-center gap-2 btn-primary">
                Call Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/" className="inline-flex items-center gap-2 btn-outline">
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
