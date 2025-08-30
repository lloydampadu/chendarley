"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Premium White Rice",
    desc: "Soft, fragrant, and carefully processed for bulk distribution.",
    img: "/whiterice.jpg",
  },
  {
    name: "Brown Rice",
    desc: "A wholesome, nutrient-rich option for health-conscious consumers.",
    img: "/brownrice.jpg",
  },
  {
    name: "Broken Rice",
    desc: "Cost-effective, quality rice ideal for food services and industries.",
    img: "/brokenrice.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-green-900 mb-12"
        >
          Our Rice Varieties
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-green-50 rounded-2xl shadow-lg overflow-hidden"
            >
              <Image
                src={p.img}
                alt={p.name}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}