// components/hero/ScrollVideoHero.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollVideoHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/farm.mp4"
        autoPlay
        loop
        muted
        style={{ opacity }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center text-white"
        style={{ opacity }}
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">Scroll to Discover</h1>
          <p className="mt-4 text-lg md:text-xl">Interactive Video Hero</p>
        </div>
      </motion.div>
    </section>
  );
}
