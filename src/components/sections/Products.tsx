"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

const products = [
  {
    name: "Premium Turmeric Powder",
    tag: "Flagship",
    features: ["High Curcumin Content", "Export Grade", "Natural Aroma"],
    color: "from-yellow-400 to-yellow-600",
    image: "/products/turmeric.png",
  },
  {
    name: "Fresh Ginger",
    tag: "Upcoming",
    features: ["Locally Sourced", "Hygienic Processing", "Bulk Orders"],
    color: "from-amber-600 to-amber-800",
    image: "/products/ginger.png",
  },
  {
    name: "Agricultural Spices",
    tag: "Upcoming",
    features: ["Authentic Taste", "Strict Quality Control", "Global Standards"],
    color: "from-red-600 to-red-800",
    image: "/products/spices.png",
  },
  {
    name: "Export Quality Vegetables",
    tag: "Freshly Sourced",
    features: ["Farm Fresh", "Organic Farming", "Fast Global Shipping"],
    color: "from-green-600 to-green-800",
    image: "/products/vegetables.png",
  },
  {
    name: "Karnataka Local Goods",
    tag: "Traditional",
    features: ["Golden Jaggery", "Nutritious Pulses", "Locally Harvested"],
    color: "from-orange-600 to-orange-800",
    image: "/products/karnataka_goods.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 relative z-10 bg-[#05142d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Premium Commodities" subtitle="OUR PRODUCTS">
          Discover our range of high-quality agricultural exports, meticulously sourced and processed to meet international standards.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-gold/50 transition-all duration-500 flex flex-col h-full"
            >
              {/* Animated Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500 rounded-full -translate-y-1/2 translate-x-1/2`} />
              
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 glass rounded-full text-gold">
                  {product.tag}
                </span>
              </div>
              
              <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden glass border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-6 group-hover:text-gold-light transition-colors">
                {product.name}
              </h3>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {product.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-gray-warm text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full mt-auto" onClick={() => window.location.href = '#rfq'}>
                Request Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
