import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CoursesSection from "../components/sections/CoursesSection";
import SEO from "../components/SEO";

export default function Courses() {
  return (
    <main className="min-h-screen">
      <SEO
        title="Abacus & Vedic Maths Courses for Kids | Genius Academy"
        description="Explore structured abacus and vedic maths courses designed to improve speed, accuracy, confidence, and brain development in children."
        canonicalUrl="/courses"
      />
      <CoursesSection />

      {/* Additional Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">More Courses Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're constantly expanding our offerings to provide comprehensive education solutions. Check back soon for additional programs tailored to your needs.
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
