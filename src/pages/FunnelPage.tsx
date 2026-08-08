import { motion } from "framer-motion";
import { Benefits } from "../components/Benefits";
import { Comparison } from "../components/Comparison";
import { FAQ } from "../components/FAQ";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Included } from "../components/Included";
import { PriceCard } from "../components/PriceCard";
import { StickyCTA } from "../components/StickyCTA";
import { Testimonials } from "../components/Testimonials";
import { VideoSection } from "../components/VideoSection";
import { useScrollProgress } from "../lib/useScrollProgress";
import { useEffect } from "react";
import { viewContent } from "../lib/metaPixel";

export default function FunnelPage() {
  const { progress, showSticky } = useScrollProgress();

  useEffect(() => {
    viewContent();
  }, []);
  
  document.title = "Tablas sin frustracion | Practica divertida";

  return (
    <motion.main
      className="min-h-screen bg-canvas text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StickyCTA show={showSticky} progress={progress} />
      <Hero />
      <VideoSection />
      <Testimonials />
      <Benefits />
      <Included />
      <Gallery />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <PriceCard />
    </motion.main>
  );
}
