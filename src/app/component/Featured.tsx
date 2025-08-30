// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Leaf, Package, Handshake, Globe } from "lucide-react";

// Feature Data
const features = [
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: "Premium Rice Varieties",
    description:
      "Rice grown with precision and care, ensuring quality, taste, and nutrition in every grain.",
  },
  {
    icon: <Package className="w-10 h-10 text-green-600" />,
    title: "Sustainable Farming Practices",
    description:
      "Eco-friendly methods that preserve soil health and support farming communities.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-green-600" />,
    title: "Exclusive B2B Partnerships",
    description:
      "We supply select businesses with consistent, high-quality rice harvests.",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    title: "Proudly Ghanaian, Globally Trusted",
    description:
      "Blending tradition and innovation to deliver rice that stands out worldwide.",
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Quality Rice, Grown with Care
        </motion.h2>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}