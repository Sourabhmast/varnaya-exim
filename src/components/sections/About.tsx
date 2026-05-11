"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, Globe2, Leaf, ShieldCheck } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Founded", value: "2026" },
    { label: "Location", value: "Karnataka" },
    { label: "Focus", value: "Premium" },
    { label: "Reach", value: "Global" },
  ];

  const features = [
    { icon: <Leaf className="text-gold w-6 h-6" />, title: "Sustainable Sourcing", desc: "Directly from the agricultural heartland." },
    { icon: <ShieldCheck className="text-gold w-6 h-6" />, title: "Export Grade", desc: "Uncompromising quality standards." },
    { icon: <Globe2 className="text-gold w-6 h-6" />, title: "Global Trade", desc: "Connecting local farmers to the world." },
    { icon: <CheckCircle2 className="text-gold w-6 h-6" />, title: "Trusted Network", desc: "Strong supplier relationships." },
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <SectionHeading title="Rooted in Tradition, Built for the World" align="left" subtitle="ABOUT VARNAYA EXIM">
              <p className="mb-6">
                Established in 2026 and based in Gokak, Varnaya EXIM is a premier <strong>Karnataka turmeric exporter</strong> bridging the gap between premium Indian agriculture and global demand. We specialize in exporting the finest Turmeric Powder and are rapidly expanding into diverse agricultural commodities.
              </p>
              <p>
                Our mission is to deliver world-class export excellence while empowering local communities and maintaining ethical, sustainable sourcing practices.
              </p>
            </SectionHeading>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="glass-card p-6 rounded-2xl border-l-4 border-l-gold"
                >
                  <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-warm tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Visuals */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-8 relative z-10"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">Our Core Pillars</h3>
              <div className="space-y-6">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="p-3 glass rounded-xl group-hover:bg-gold/20 transition-colors">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-gold transition-colors">{feat.title}</h4>
                      <p className="text-gray-warm text-sm">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
