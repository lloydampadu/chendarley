"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/chendarley.jpg"
            alt="Chen Darley Farm"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            About Chen Darley Ltd.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Chen Darley Ltd., we believe that farming is more than just a
            business—it’s a commitment to feeding families and building
            sustainable communities. With roots in Ghana’s fertile lands, we
            focus on cultivating premium-quality rice for businesses and
            distributors who share our values of excellence and trust.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We combine modern agricultural practices with deep respect for the
            land, ensuring that every grain is nurtured from seed to harvest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}