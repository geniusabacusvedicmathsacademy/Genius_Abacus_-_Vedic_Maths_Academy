import { useState, useEffect } from "react";
import { Star, Award, Users, Zap, BookOpen, TrendingUp, Check } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function WhyChooseSection() {
  useScrollAnimation();

  const [api, setApi] = useState<CarouselApi>();

  // Autoplay Logic
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  const testimonials = [
    {
      name: "Mrs. Sandeep Khole",
      role: "Parent, Mumbai",
      text: "My daughter's confidence in mathematics has completely transformed since joining Genius Academy. Not only did her grades improve, but she also developed a genuine love for numbers!",
      rating: 5,
    },
    {
      name: "Mrs. Raju Kajalkr",
      role: "Parent",
      text: "Excellent teaching methodology! My son has improved his concentration significantly and calculates faster than a calculator now. Truly impressed with the results.",
      rating: 5,
    },
    {
      name: "Miss. Varsha Parlkar",
      role: "Parent",
      text: "The level-wise progression is very structured. The teachers are very supportive and ensure every child understands the concepts thoroughly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mrs. Sagar Nadu Appa Parlkar",
      role: "Parent",
      text: "Best decision for my child's future. The Vedic Maths tricks are simply amazing! It has helped improve academic performance and overall mental agility.",
      rating: 5,
    },
  ];

  const reasons = [
    {
      title: "Best Abacus Class",
      description: "Industry-leading curriculum designed by experts with years of experience",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-genius-orange to-genius-red",
    },
    {
      title: "Number 1 Institute",
      description: "Award-winning academy recognized across India for excellence",
      icon: <Award className="w-8 h-8" />,
      color: "from-genius-yellow to-genius-orange",
    },
    {
      title: "Certified Teachers",
      description: "Highly qualified instructors with international certifications",
      icon: <Users className="w-8 h-8" />,
      color: "from-genius-cyan to-genius-green",
    },
    {
      title: "Level-wise Exams",
      description: "Structured progression with official exams and certifications",
      icon: <Zap className="w-8 h-8" />,
      color: "from-genius-green to-genius-cyan",
    },
    {
      title: "Online & Offline",
      description: "Flexible learning modes - choose what works best for you",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-genius-red to-genius-orange",
    },
    {
      title: "Franchise Support",
      description: "Partnership opportunities across India with complete support",
      icon: <Star className="w-8 h-8" />,
      color: "from-genius-navy to-genius-cyan",
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-genius-orange font-bold text-sm uppercase tracking-widest">Our Advantages</span>
          <h2 className="section-title text-center mt-2">Why Choose Genius Academy</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their mathematical abilities
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-3d relative overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-genius-navy mb-3">{reason.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${reason.color} w-0 group-hover:w-full transition-all duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal max-w-5xl mx-auto">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-genius-orange transform transition-all duration-300 mx-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-genius-yellow text-genius-yellow" />
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed italic font-medium">
                          "{testimonial.text}"
                        </p>
                        <div>
                          <p className="font-bold text-genius-navy text-lg">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-genius-orange to-genius-red rounded-lg p-6 text-white text-center hover:scale-105 transition-transform duration-300 shadow-lg">
                          <p className="text-4xl font-bold mb-2">95%</p>
                          <p className="text-sm font-semibold opacity-90">Success Rate</p>
                        </div>
                        <div className="bg-gradient-to-br from-genius-cyan to-genius-green rounded-lg p-6 text-white text-center hover:scale-105 transition-transform duration-300 shadow-lg">
                          <p className="text-4xl font-bold mb-2">99%</p>
                          <p className="text-sm font-semibold opacity-90">Happy Students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <div className="hidden md:block">
              <CarouselPrevious className="-left-6 bg-white shadow-lg hover:bg-genius-orange hover:text-white" />
              <CarouselNext className="-right-6 bg-white shadow-lg hover:bg-genius-orange hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal">
          <h3 className="text-3xl font-bold text-genius-navy mb-4 text-shadow">Ready to Start Your Child's Journey?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards mathematical excellence today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918626034608" className="btn-primary flex items-center justify-center gap-2">
              <span className="text-xl">📞</span> Call Now
            </a>
            <a
              href="https://wa.me/918626034608?text=Hello%2C%20I%20want%20to%20know%20about%20Abacus%20%26%20Vedic%20Maths%20classes."
              className="btn-outline flex items-center justify-center gap-2"
            >
              <span className="text-xl">💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
