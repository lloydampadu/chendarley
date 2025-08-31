"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroVideo() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <motion.video
        style={{ scale: videoScale }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/farm.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/farm-placeholder.jpg"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Chen-Darley Group Ghana
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Agriculture • Oil & Gas • Mining • Commodities
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full text-lg font-medium shadow-lg"
        >
          Explore More
        </motion.button>
      </motion.div>
    </section>
  );
}
