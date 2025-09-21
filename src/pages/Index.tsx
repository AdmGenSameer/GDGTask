import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustrySection from "@/components/IndustrySection";
import SalesAnalysisSection from "@/components/SalesAnalysisSection";
import PlatformSection from "@/components/PlatformSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <IndustrySection />
      <SalesAnalysisSection />
      <PlatformSection />
      <Footer />
    </div>
  );
};

export default Index;
