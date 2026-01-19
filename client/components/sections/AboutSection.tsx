export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="text-genius-orange font-bold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="section-title">About Genius Abacus & Vedic Maths Academy</h2>
            </div>

            <div className="space-y-4 text-lg text-gray-700">
              <p>
                We are <strong>one of the Best Abacus Classes</strong> and <strong>Number 1 Abacus & Vedic Maths Institute</strong> in India, dedicated to transforming how children learn mathematics.
              </p>

              <p>
                Our comprehensive programs focus on:
              </p>

              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-genius-orange font-bold text-2xl">✓</span>
                  <span><strong>Mental Maths Mastery</strong> - Advanced mental calculation techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-genius-green font-bold text-2xl">✓</span>
                  <span><strong>Speed Calculation</strong> - Rapid problem-solving abilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-genius-cyan font-bold text-2xl">✓</span>
                  <span><strong>Concentration Building</strong> - Enhanced focus and memory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-genius-red font-bold text-2xl">✓</span>
                  <span><strong>Confidence & Communication</strong> - Boosted self-esteem and presentation skills</span>
                </li>
              </ul>

              <p className="pt-4 border-t border-gray-200">
                Using proven Abacus and Vedic Maths techniques, we empower students to excel in academics and competitive exams with unshakeable mathematical foundations.
              </p>
            </div>

          </div>

          {/* Right - Video */}
          <div className="relative">
            <div className="card-3d aspect-video overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NoCwwrAnoS8?rel=0&modestbranding=1"
                title="Genius Academy Video"
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-genius-yellow opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-genius-cyan opacity-10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 pt-20 border-t-2 border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-genius-orange mb-2">1000+</div>
            <p className="text-gray-600 font-semibold">Students Trained</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genius-green mb-2">50+</div>
            <p className="text-gray-600 font-semibold">Certified Teachers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-genius-red mb-2">95%</div>
            <p className="text-gray-600 font-semibold">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
