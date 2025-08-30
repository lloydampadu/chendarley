import AboutSection from "../component/AboutSection";
import Features from "../component/Featured";
import GallerySection from "../component/GallerySection";
import Hero from "../component/Hero";
import ProductsSection from "../component/ProductSection";


export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
    </div>

  );
}