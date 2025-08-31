"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";
import Image from "next/image";

export default function EnterpriseImageHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.6]);

  const paraHeadingY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const paraSubY = useTransform(scrollYProgress, [0, 1], [150, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
    <div ref={containerRef} className="relative">
      {/* HERO SECTION */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
        style={{ opacity: heroOpacity }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY, x: mouseXSpring, scale: heroScale }}
        >
          <Image
            src="/images/farmwithcontainer.jpg"
            alt="Farm with Container"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
          style={{ opacity: overlayOpacity }}
        />

        {/* Hero Text */}
        <motion.div
          className="relative z-10 flex h-full items-center justify-center"
          style={{ y: textY }}
        >
          <div className="container mx-auto px-6 text-center text-white">
            <div className="overflow-hidden">
              <motion.h1
                className="text-6xl md:text-8xl font-bold tracking-tighter"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
              >
                Chen-Darley
              </motion.h1>
            </div>
            <div className="overflow-hidden flex justify-center items-center gap-2">
              <motion.p
                className="mt-2 text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
              >
                Group
              </motion.p>
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textRevealVariants}
              >
                <Image
                  src="/images/flagghana.png"
                  alt="Ghana Flag"
                  width={25}
                  height={15}
                  className="rounded-sm shadow-md mt-4"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* PARALLAX SCROLL SECTION */}
      <div className="relative min-h-screen bg-black flex flex-col items-center justify-center text-white px-6 py-16">
       
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
