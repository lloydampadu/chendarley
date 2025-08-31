import CarouselHero from "../component/CarouselHero";
import EnterpriseImageHero from "../component/Hero";
import HeroVideoClient from "../component/HeroVideoClient";
import ImageHero from "../component/ImageHero";
import ScrollVideoHero from "../component/ScrollVideoHero";


export default function Home() {
  return (

    <div className='w-full'>
      <EnterpriseImageHero/>

      <div className="my-8 text-center">or</div>

      <HeroVideoClient />
      
    </div>

  );
}















{/* <Features />
      <AboutSection />
      <ProductsSection />
      <GallerySection /> */}