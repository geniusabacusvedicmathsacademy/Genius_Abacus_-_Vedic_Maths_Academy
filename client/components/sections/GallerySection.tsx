import { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Abacus Logo",
      description: "Official Abacus Academy Logo",
      icon: "🧮",
      color: "from-genius-orange to-genius-red",
    },
    {
      title: "Vedic Maths Logo",
      description: "Vedic Mathematics Program Badge",
      icon: "📚",
      color: "from-genius-green to-genius-cyan",
    },
    {
      title: "Academy Combined",
      description: "Genius Academy Branding",
      icon: "⭐",
      color: "from-genius-navy to-genius-cyan",
    },
    {
      title: "Classroom Learning",
      description: "Interactive class sessions",
      icon: "👨‍🏫",
      color: "from-genius-cyan to-genius-blue-600",
    },
    {
      title: "Student Achievement",
      description: "Celebrating student success",
      icon: "🏆",
      color: "from-genius-yellow to-genius-orange",
    },
    {
      title: "Workshop Activity",
      description: "Hands-on learning activities",
      icon: "🎓",
      color: "from-genius-red to-genius-orange",
    },
    {
      title: "Online Classes",
      description: "Virtual learning sessions",
      icon: "💻",
      color: "from-genius-cyan to-genius-green",
    },
    {
      title: "Certification Day",
      description: "Student certification ceremony",
      icon: "📜",
      color: "from-genius-orange to-genius-yellow",
    },
    {
      title: "Team Moments",
      description: "Our dedicated teaching team",
      icon: "👥",
      color: "from-genius-navy to-genius-orange",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-genius-orange font-bold text-sm uppercase tracking-widest">Visual Tour</span>
          <h2 className="section-title text-center">Gallery</h2>
          <p className="section-subtitle text-center">
            Explore moments from our academy and student success stories
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer relative overflow-hidden rounded-2xl group"
            >
              {/* Image Container */}
              <div className={`w-full aspect-square bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 group-hover:to-white/30 transition-all duration-300"></div>

                {/* Icon/Placeholder */}
                <div className="relative z-10 text-center">
                  <p className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</p>
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-4xl mb-2">🔍</p>
                    <p className="font-semibold">View Full Size</p>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-white">
                <h3 className="font-bold text-genius-navy mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className={`w-full aspect-square bg-gradient-to-br ${galleryItems[selectedImage].color} rounded-2xl flex items-center justify-center`}>
                <div className="text-center">
                  <p className="text-9xl mb-4">{galleryItems[selectedImage].icon}</p>
                  <h2 className="text-white text-3xl font-bold">{galleryItems[selectedImage].title}</h2>
                </div>
              </div>

              {/* Caption */}
              <div className="bg-gray-900 text-white p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-2">{galleryItems[selectedImage].title}</h3>
                <p className="text-gray-300">{galleryItems[selectedImage].description}</p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setSelectedImage((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1))}
                  className="px-6 py-2 bg-genius-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  ← Previous
                </button>
                <p className="text-white font-semibold">
                  {selectedImage + 1} / {galleryItems.length}
                </p>
                <button
                  onClick={() => setSelectedImage((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1))}
                  className="px-6 py-2 bg-genius-cyan text-white font-bold rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats Box */}
        <div className="bg-gradient-to-r from-genius-navy to-genius-cyan rounded-2xl p-8 text-white text-center">
          <p className="text-lg mb-4">
            Join our vibrant community and be part of a transformational educational journey
          </p>
          <button className="px-8 py-3 bg-genius-yellow text-genius-navy font-bold rounded-lg hover:bg-yellow-300 transition-colors">
            Enroll Your Child Today
          </button>
        </div>
      </div>
    </section>
  );
}
