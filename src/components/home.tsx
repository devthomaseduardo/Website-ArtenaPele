import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";
import TestimonialsSection from "./TestimonialsSection";
import ArtistsSection from "./ArtistsSection";
import ProcessSection from "./ProcessSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import AppointmentSection from "./AppointmentSection";
import LocationSection from "./LocationSection";
import Footer from "./Footer";
import ParallaxBackdrop from "./ParallaxBackdrop";

function Home() {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen text-white studio-black-bg">
      <ParallaxBackdrop />

      <Header onAppointmentClick={scrollToAppointment} />

      {/* Hero Section */}
      <HeroSection onCtaClick={scrollToAppointment} />

      {/* Gallery Section */}
      <div id="gallery">
        <GallerySection />
      </div>

      {/* Process Section */}
      <div id="process">
        <ProcessSection />
      </div>

      {/* Artists Section */}
      <div id="artists">
        <ArtistsSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Location Section */}
      <div id="location">
        <LocationSection />
      </div>

      {/* Appointment Section */}
      <div id="appointment">
        <AppointmentSection />
      </div>

      {/* Footer */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
