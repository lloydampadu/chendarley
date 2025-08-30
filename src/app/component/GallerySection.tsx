import Image from "next/image";

export default function GallerySection() {
  const images = [
    "/grains.webp",
    "/tractor.webp",
    "/waterspray.webp",
    "/car.jpg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Farm in Focus</h2>
        <p className="text-lg text-gray-600 mb-12">
          Take a glimpse at Chen Darley’s lush fields, sustainable farming
          methods, and hardworking farmers dedicated to bringing quality rice
          from our land to your table.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg">
              <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}