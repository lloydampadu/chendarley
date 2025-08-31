// components/hero/ImageHero.tsx
"use client";
import { motion } from "framer-motion";

export default function ImageHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.img
        src="/images/farmwithcontainer.jpg"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold">Chen-Darley Group</h1>
          <p className="mt-4 text-lg md:text-xl">
            Strong Partnerships, Bright Future
          </p>
        </div>
      </motion.div>
    </section>
  );
}
