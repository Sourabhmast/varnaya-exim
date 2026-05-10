"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Truck, BadgeCheck, Scale, HeartHandshake, Clock, ShieldAlert, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Award />, title: "Premium Quality Assurance", desc: "Rigorous testing and sorting to ensure only the best reaches you." },
    { icon: <HeartHandshake />, title: "Ethical Sourcing", desc: "Fair trade practices empowering local Karnataka farmers." },
    { icon: <Truck />, title: "Timely Delivery", desc: "Optimized global logistics for fresh and prompt arrivals." },
    { icon: <BadgeCheck />, title: "Export Compliance", desc: "Fully certified and compliant with international trade laws." },
    { icon: <Scale />, title: "Competitive Pricing", desc: "Direct sourcing allows us to offer the best market rates." },
    { icon: <ShieldAlert />, title: "Reliable Network", desc: "A robust supply chain built to withstand global challenges." },
  ];

  return (
    <section className="py-24 relative z-10 bg-primary overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gold/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Why Choose Varnaya EXIM" subtitle="OUR ADVANTAGE">
          We combine local expertise with global standards to deliver an unparalleled export experience.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group border-b-4 border-b-transparent hover:border-b-gold"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-primary mb-6 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-warm text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
