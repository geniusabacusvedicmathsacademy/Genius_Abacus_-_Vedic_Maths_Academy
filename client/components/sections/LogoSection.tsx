export default function LogoSection() {
  const logos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7ce567d5de104bc8a7bd634368b41b44%2Ff47216a77954424384a3b91085a864cb?format=webp&width=800",
      alt: "Abacus Academy Logo",
      title: "Abacus Academy",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7ce567d5de104bc8a7bd634368b41b44%2F45ff3aab637b4c64a9debdb858966e52?format=webp&width=800",
      alt: "Genius Academy Complete Branding",
      title: "Genius Academy",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F7ce567d5de104bc8a7bd634368b41b44%2F5dd9afd5d81542d6bf64a2472e38fa81?format=webp&width=800",
      alt: "Vedic Maths Logo",
      title: "Vedic Maths",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-genius-navy mb-3">Our Brand Identity</h2>
          <p className="text-gray-600 text-lg">Trusted by parents and students across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-32 md:h-40 w-auto object-contain mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-bold text-genius-navy text-center">{logo.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-genius-orange to-genius-red rounded-xl text-white text-center">
          <p className="text-lg font-semibold">
            All three logos represent our commitment to excellence in Abacus & Vedic Maths education
          </p>
        </div>
      </div>
    </section>
  );
}
