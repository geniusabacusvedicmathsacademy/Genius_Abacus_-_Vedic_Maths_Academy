import { ArrowRight } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function CoursesSection() {
  useScrollAnimation();

  const courses = [
    {
      title: "Abacus Classes",
      description: "Best Abacus Class for kids with level-based training and exams. Master the ancient technique of rapid mental calculations using the abacus tool.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F7ce567d5de104bc8a7bd634368b41b44%2Ff47216a77954424384a3b91085a864cb?format=webp&width=800",
      color: "from-genius-orange to-genius-red",
      highlights: [
        "8 Progressive Levels",
        "Certified Instructors",
        "Level Exams & Certification",
        "1:1 Mentorship",
      ],
    },
    {
      title: "Vedic Maths Classes",
      description: "Vedic Maths Class using fast calculation techniques for school and competitive exams. Learn ancient Indian mathematical methods.",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F7ce567d5de104bc8a7bd634368b41b44%2F5dd9afd5d81542d6bf64a2472e38fa81?format=webp&width=800",
      color: "from-genius-cyan to-genius-green",
      highlights: [
        "4 Advanced Levels",
        "Exam Preparation",
        "Speed Techniques",
        "Competition Ready",
      ],
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-genius-orange opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-genius-cyan opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-genius-orange font-bold text-sm uppercase tracking-widest">Our Programs</span>
          <h2 className="section-title text-center mt-2">Courses Offered</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Choose the perfect program to unlock your child's mathematical genius
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="card-3d relative overflow-hidden group backdrop-blur-sm reveal"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                transitionDelay: `${index * 0.2}s`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center">
                  <img
                    src={course.icon}
                    alt={course.title}
                    className="h-28 w-auto object-contain drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-genius-navy mb-4 text-center">{course.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-center">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8 bg-white/40 p-4 rounded-xl backdrop-blur-sm">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${course.color}`}></div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="tel:+918626034608" className="btn-primary w-full flex items-center justify-center gap-2 text-center group-hover:shadow-orange-500/30">
                  Call to Connect
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal relative overflow-hidden rounded-3xl p-8 md:p-12 text-center text-white soft-shadow-lg transform hover:scale-[1.01] transition-transform duration-500" style={{
          background: "linear-gradient(135deg, hsl(224 64% 33%) 0%, hsl(188 94% 48%) 100%)",
        }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Not Sure Which Course?</h3>
            <p className="mb-8 text-lg opacity-95 max-w-2xl mx-auto">
              Connect with our experts and get personalized guidance for your child
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918626034608" className="px-8 py-3 bg-genius-orange hover:bg-orange-600 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Call Now
              </a>
              <a href="mailto:geniusabacus.vedicmaths.academy@gmail.com" className="px-8 py-3 bg-white text-genius-navy hover:bg-gray-100 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
