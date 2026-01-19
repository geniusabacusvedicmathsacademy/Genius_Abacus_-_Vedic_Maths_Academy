import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

export default function ContactSection() {

  return (
    <section id="contact" className="py-10 sm:py-20 bg-gradient-to-br from-green-50 via-white to-cyan-50">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-genius-orange font-bold text-xs sm:text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-genius-navy mb-2 sm:mb-4">Contact & Location</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            We're here to help you start your journey with Genius Academy
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-5 sm:space-y-8">
            {/* Contact Cards */}
            <div className="card-3d">
              <h3 className="text-lg sm:text-2xl font-bold text-genius-navy mb-4 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-genius-orange to-genius-red flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-genius-navy text-sm sm:text-base mb-1">Phone</p>
                    <a href="tel:+918626034608" className="text-gray-600 hover:text-genius-orange transition-colors text-sm break-all">
                      +91 8626034608
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0">
                    <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-genius-navy text-sm sm:text-base mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/918626034608?text=Hello%2C%20I%20want%20to%20know%20about%20Abacus%20%26%20Vedic%20Maths%20classes."
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                    >
                      Chat with Us
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-genius-cyan to-genius-green flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-genius-navy text-sm sm:text-base mb-1">Email</p>
                    <a href="mailto:geniusabacus.vedicmaths.academy@gmail.com" className="text-gray-600 hover:text-genius-cyan transition-colors text-xs sm:text-sm break-all">
                      geniusabacus.vedicmaths.academy@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-genius-yellow to-genius-orange flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-genius-navy text-sm sm:text-base mb-1">Location</p>
                    <p className="text-gray-600 text-sm">Jalna, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-3d">
              <h3 className="text-lg sm:text-2xl font-bold text-genius-navy mb-4 sm:mb-6">Connect With Us</h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://www.instagram.com/geniusabacusvedicmathsacademy?igsh=b2dqOXVxZ292bjcz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-genius-orange hover:bg-orange-50 transition-all"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                    <Instagram className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-genius-navy text-sm sm:text-base">Instagram</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-all">@geniusabacusvedicmathsacademy</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/share/1NneQYDJe1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all"
                >
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <Facebook className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-genius-navy text-sm sm:text-base">Facebook</p>
                    <p className="text-xs sm:text-sm text-gray-600">Genius Abacus Academy</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="card-3d">
              <h3 className="text-lg sm:text-xl font-bold text-genius-navy mb-3 sm:mb-4">Find Us on Map</h3>
              <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-gray-200">
                <iframe
                  title="Genius Academy Location"
                  width="100%"
                  height="100%"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0640029184536!2d76.36923!3d19.87969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb4e0e0000007d%3A0x0!2sJalna%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center">
                <a href="https://share.google/VyAFqTV0lvIspZf4E" target="_blank" rel="noopener noreferrer" className="text-genius-orange hover:text-orange-600 font-semibold">
                  View Full Location Details →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-16 bg-gradient-to-r from-genius-navy to-genius-orange rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Still Have Questions?</h3>
          <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90">
            Our team is ready to help you with any information about our programs and enrollment process
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="tel:+918626034608" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-genius-yellow text-genius-navy font-bold rounded-lg hover:bg-yellow-300 transition-colors text-sm sm:text-base">
              Call Now
            </a>
            <a
              href="https://wa.me/918626034608"
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
