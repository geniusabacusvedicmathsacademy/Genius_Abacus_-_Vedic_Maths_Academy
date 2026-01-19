import HeroSection from "../components/sections/HeroSection";
import LogoSection from "../components/sections/LogoSection";
import AboutSection from "../components/sections/AboutSection";
import CoursesSection from "../components/sections/CoursesSection";
import LevelsSection from "../components/sections/LevelsSection";
import OnlineClassesSection from "../components/sections/OnlineClassesSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import FranchiseSection from "../components/sections/FranchiseSection";
import ContactSection from "../components/sections/ContactSection";
import SEO from "../components/SEO";

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Genius Abacus & Vedic Maths Academy",
    "url": "https://www.geniusabacus-vedicmaths.com",
    "logo": "https://www.geniusabacus-vedicmaths.com/genius-abacus-academy-logo.png",
    "sameAs": [
      "https://facebook.com/geniusabacus",
      "https://instagram.com/geniusabacus"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918626034608",
      "contactType": "customer service"
    }
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="Best Abacus & Vedic Maths Classes in India | Genius Academy"
        description="Genius Abacus & Vedic Maths Academy offers expert-led abacus and vedic maths classes for kids. Online & offline batches available. Book a free demo today."
        schema={schema}
      />
      <HeroSection />
      <LogoSection />
      <AboutSection />
      <CoursesSection />
      <LevelsSection />
      <OnlineClassesSection />
      <WhyChooseSection />
      <FranchiseSection />
      <ContactSection />
    </main>
  );
}
