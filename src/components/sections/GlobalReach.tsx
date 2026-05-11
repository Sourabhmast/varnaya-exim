"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GlobalReach() {
  return (
    <section id="global-reach" className="py-24 relative z-10 bg-[#05142d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Connecting Karnataka to the World" subtitle="GLOBAL REACH">
          Our logistics network is optimized for international trade, ensuring our premium commodities reach global markets with efficiency and care.
        </SectionHeading>

        <div className="mt-16 relative aspect-[2/1] w-full rounded-3xl overflow-hidden glass border-gold/20 flex items-center justify-center">
          {/* Placeholder for actual interactive map / globe visualization */}
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain opacity-20" />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-4 h-4 bg-gold rounded-full mx-auto relative mb-4"
            >
              <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-75" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Origin: Karnataka, India</h3>
            <p className="text-sm text-gold">Targeting Global Markets: USA, UAE, Europe, & SE Asia</p>
          </div>

          {/* Animated Trade Flow Lines (Abstract representation) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
             <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M50,50 Q70,20 90,40" 
                fill="none" 
                stroke="#C79A42" 
                strokeWidth="0.5" 
                strokeDasharray="2 2" 
             />
             <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                d="M50,50 Q30,30 10,20" 
                fill="none" 
                stroke="#C79A42" 
                strokeWidth="0.5" 
                strokeDasharray="2 2" 
             />
             <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                d="M50,50 Q60,80 80,90" 
                fill="none" 
                stroke="#C79A42" 
                strokeWidth="0.5" 
                strokeDasharray="2 2" 
             />
          </svg>
        </div>
      </div>
    </section>
  );
}
