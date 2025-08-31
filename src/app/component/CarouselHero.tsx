// components/hero/CarouselHero.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = ["/images/farmwithcontainer.jpg", "/images/farmwithpartners.jpg", "/images/name.jpg"];

export default function CarouselHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.img
        key={index}
        src={images[index]}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">Innovation in Motion</h1>
          <p className="mt-4 text-lg md:text-xl">
            Dynamic Hero Carousel
          </p>
        </div>
      </motion.div>
    </section>
  );
}
