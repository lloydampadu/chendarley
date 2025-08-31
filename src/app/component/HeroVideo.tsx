"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform,  Variants,
 } from "framer-motion";

export default function ScrollVideoHero() {
  const containerRef = useRef(null);
  const [, setIsVideoLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text animations - starts at normal size, expands massively
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 15, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0.1, 1, 0.5, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  // Video animations - starts blurred/dark, becomes clear
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.1, 1]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [6, 3, 1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.5, 0.3, 0]);

    const textRevealVariants: Variants = {
      hidden: {
        opacity: 0,
        y: 50,
        clipPath: "inset(100% 0% 0% 0%)",
      },
      visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        transition: {
          duration: 1.2,
          delay: i * 0.1,
          ease: [0.215, 0.61, 0.355, 1],
        },
      }),
    };

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Video */}
        <motion.div 
          className="absolute inset-0"
          style={{ scale: videoScale }}
        >
          <video
            className="h-full w-full object-cover"
            src="/videos/farm.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          />
          
          {/* Blur overlay */}
          <motion.div 
            className="absolute inset-0 backdrop-blur-xl"
            style={{ 
              backdropFilter: useTransform(
                videoBlur,
                (value) => `blur(${value}px)`
              )
            }}
          />
        </motion.div>

        {/* Dark overlay that fades out */}
        <motion.div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Expanding Text */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.div
            className="text-center text-white"
            style={{ 
              scale: textScale,
              opacity: textOpacity,
              y: textY
            }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Chen-Darley
            </motion.h1>
             <motion.p
                className="mt-2 text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
              >
                Group
              </motion.p>
          </motion.div>
        </div>

        {/* Subtle grain texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <filter id="grain">
              <feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" opacity="1"/>
          </svg>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              className="h-12 w-[1px] bg-white"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Next section preview (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight max-w-4xl">
            Agriculture • Oil & Gas • Mining • Commodities • Construction • Plant & Equipment Dealership
          </h2>
          <p className="text-xl opacity-70">Continue exploring our story</p>
        </div>
      </div>
    </div>
  );
}