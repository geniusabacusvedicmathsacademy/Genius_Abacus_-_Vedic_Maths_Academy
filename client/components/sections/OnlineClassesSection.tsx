import { Clock, Users, Calendar, Check } from "lucide-react";

export default function OnlineClassesSection() {
  const classes = [
    {
      title: "Weekend Batch",
      schedule: "Saturday & Sunday",
      duration: "3 Hours per session",
      time: "Flexible time slots",
      icon: "🗓️",
      color: "from-genius-orange to-genius-red",
      features: [
        "Interactive live classes",
        "Small batch (max 8 students)",
        "One-on-one doubt clearing",
        "Weekly assignments",
        "Performance tracking",
        "Certificate upon completion",
      ],
      mode: "Online & Offline",
    },
    {
      title: "Regular Batch",
      schedule: "Monday to Friday",
      duration: "1 Hour daily",
      time: "Multiple time slots",
      icon: "📚",
      color: "from-genius-cyan to-genius-green",
      features: [
        "Daily structured lessons",
        "Small batch (max 6 students)",
        "Personalized attention",
        "Daily practice worksheets",
        "Monthly assessments",
        "Progress reports",
      ],
      mode: "Online & Offline",
    },
  ];

  return (
    <section id="online-classes" className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-genius-cyan opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-genius-orange opacity-4 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-genius-orange font-bold text-sm uppercase tracking-widest">Flexible Learning</span>
          <h2 className="section-title text-center">Online Classes</h2>
          <p className="section-subtitle text-center">
            Choose the schedule that fits your child's lifestyle
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="card-3d relative overflow-hidden group"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 z-20">
                <span className={`px-4 py-2 bg-gradient-to-r ${classItem.color} text-white font-bold rounded-full text-xs soft-shadow`}>
                  {classItem.mode}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{classItem.icon}</div>

                <h3 className="text-3xl md:text-4xl font-bold text-genius-navy mb-6">{classItem.title}</h3>

                {/* Schedule Info */}
                <div className="space-y-4 mb-8 pb-8 border-b-2 border-white/40">
                  <div className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                    <Calendar className="w-5 h-5 text-genius-orange flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Schedule</p>
                      <p className="font-bold text-gray-800">{classItem.schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-genius-cyan flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-800">{classItem.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform duration-300">
                    <Users className="w-5 h-5 text-genius-green flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Availability</p>
                      <p className="font-bold text-gray-800">{classItem.time}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 bg-white/40 p-4 rounded-xl backdrop-blur-sm">
                  {classItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-genius-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href="tel:+918626034608" className="w-full px-6 py-3 bg-gradient-to-r from-genius-orange to-genius-red text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  📞 Call to Connect
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="relative overflow-hidden rounded-3xl p-12 text-white" style={{
          background: "linear-gradient(135deg, hsl(220 50% 15%) 0%, hsl(188 94% 48%) 100%)",
        }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-3">🌍 Global Reach</h4>
              <p className="text-white/90 leading-relaxed">Access classes from anywhere in the world with high-speed internet connectivity</p>
            </div>
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-3">📱 Easy Access</h4>
              <p className="text-white/90 leading-relaxed">Video conferencing on laptop, tablet, or smartphone - learn at your convenience</p>
            </div>
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-3">👨‍🏫 Expert Teachers</h4>
              <p className="text-white/90 leading-relaxed">Certified instructors with years of experience in online and offline teaching</p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white border-opacity-30 relative z-10">
            <p className="text-center font-semibold mb-8 text-lg">
              ✨ First Class is FREE! Experience our teaching quality before enrollment.
            </p>
            <a
              href="https://wa.me/918626034608?text=Hello%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20for%20my%20child."
              className="block mx-auto px-8 py-4 bg-genius-yellow text-genius-navy font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center max-w-xs"
            >
              WhatsApp Us For Free Demo Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
