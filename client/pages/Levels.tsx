import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LevelsSection from "../components/sections/LevelsSection";

export default function Levels() {
  useEffect(() => {
    document.title = "Levels & Exams | Genius Abacus & Vedic Maths Academy";
  }, []);

  return (
    <main className="min-h-screen">
      <LevelsSection />

      {/* Additional Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Detailed Level Information</h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore comprehensive details about each level, exam patterns, and certification process. More detailed information coming soon!
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
