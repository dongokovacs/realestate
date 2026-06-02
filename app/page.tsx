import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import FeaturedProperties from "@/components/FeaturedProperties";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FeatureBadge from "@/components/FeatureBadge";
import SkipLink from "@/components/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <SearchBar />
        <FeaturedProperties />
        <StatsStrip />
        <ServicesSection />
        <Testimonials />
      </main>
      <Footer />
      <FeatureBadge />
    </>
  );
}
