import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import CTASection from "@/components/pages/Landing/Cta";
import Faqs from "@/components/pages/Landing/Faqs";
import Features from "@/components/pages/Landing/Features";
import Hero from "@/components/pages/Landing/Hero";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <CTASection />
      <Faqs />
      <Footer />
    </div>
  );
}
