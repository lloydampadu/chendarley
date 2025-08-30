import AboutSection from "../component/AboutSection";
import Features from "../component/Featured";
import GallerySection from "../component/GallerySection";
import Hero from "../component/Hero";
import ProductsSection from "../component/ProductSection";


export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Hero />
      <Features />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
    </div>

  );
}
