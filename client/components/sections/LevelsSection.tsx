import { Award, CheckCircle } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function LevelsSection() {
  useScrollAnimation();

  return (
    <section id="levels" className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-genius-cyan opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-genius-orange opacity-4 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-genius-orange font-bold text-sm uppercase tracking-widest">Progression Path</span>
          <h2 className="section-title text-center mt-2">Levels & Exams</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Structured learning with exams and certifications at every level
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Abacus Levels */}
          <div className="card-3d relative reveal" style={{ background: "rgba(255, 255, 255, 0.8)", border: "1px solid rgba(255, 255, 255, 0.6)" }}>
            <div className="mb-8 p-4 bg-gradient-to-br from-genius-orange to-genius-red rounded-2xl inline-block soft-shadow">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-genius-navy mb-8">Abacus Levels</h3>

            <div className="space-y-3">
              {["Junior Abacus", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8"].map((level, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-l-4 border-genius-orange hover:bg-white/80 transition-all duration-300 transform hover:scale-102 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-genius-orange to-genius-red text-white flex items-center justify-center font-bold text-sm soft-shadow">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{level}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-genius-green ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-genius-orange to-orange-100 bg-opacity-20 rounded-2xl border-l-4 border-genius-orange backdrop-blur-sm">
              <p className="text-sm font-semibold text-gray-800">
                <strong>📋 Certification:</strong> Exam conducted after every level with official certification. Student records and progress tracking provided.
              </p>
            </div>
          </div>

          {/* Vedic Maths Levels */}
          <div className="card-3d relative reveal" style={{ background: "rgba(255, 255, 255, 0.8)", border: "1px solid rgba(255, 255, 255, 0.6)", transitionDelay: "0.2s" }}>
            <div className="mb-8 p-4 bg-gradient-to-br from-genius-cyan to-genius-green rounded-2xl inline-block soft-shadow">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-genius-navy mb-8">Vedic Maths Levels</h3>

            <div className="space-y-3">
              {["Foundation Level", "Level 1", "Level 2", "Level 3", "Level 4"].map((level, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border-l-4 border-genius-cyan hover:bg-white/80 transition-all duration-300 transform hover:scale-102 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-genius-cyan to-genius-green text-white flex items-center justify-center font-bold text-sm soft-shadow">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{level}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-genius-green ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-genius-cyan to-cyan-100 bg-opacity-20 rounded-2xl border-l-4 border-genius-cyan backdrop-blur-sm">
              <p className="text-sm font-semibold text-gray-800">
                <strong>📋 Certification:</strong> Level-wise exams and certificates. Progress evaluation through periodic assessments and competition preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="reveal relative overflow-hidden rounded-3xl p-10 sm:p-12 soft-shadow-lg" style={{ background: "linear-gradient(135deg, hsl(224 64% 33%) 0%, hsl(188 94% 48%) 100%)" }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <h3 className="text-3xl font-bold text-center text-white mb-12 relative z-10 text-shadow">Your Learning Journey</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {[
              { step: "Enrollment", desc: "Start your journey", icon: "📝" },
              { step: "Learning", desc: "Structured training", icon: "📚" },
              { step: "Practice", desc: "Regular exercises", icon: "✍️" },
              { step: "Certification", desc: "Official exams & certificates", icon: "🏆" },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-2xl mb-4 soft-shadow group-hover:bg-white/30 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 border border-white/20">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">{item.step}</h4>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 -right-8 w-16 h-1 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
