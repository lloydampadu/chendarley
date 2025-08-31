import AboutSection from "../component/AboutSection";
import Features from "../component/Featured";
import GallerySection from "../component/GallerySection";
import HeroVideoClient from "../component/HeroVideoClient";
import ProductsSection from "../component/ProductSection";


export default function Home() {
  return (

    <div className='w-full overflow-x-hidden'>
      <HeroVideoClient />
      <Features />
      <AboutSection />
      <ProductsSection />
      <GallerySection />
    </div>

  );
}
