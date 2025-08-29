'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Hero Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image
          src="/name.jpg"
          alt="Chen Darley Farm"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </motion.div>

      {/* Animated Text */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Chen Darley
        </h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-xl mx-auto drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          Growing premium rice with care, straight from our lush fields to your business.
        </motion.p>
      </motion.div>
    </div>
  );
}