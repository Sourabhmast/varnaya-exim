"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: <MapPin className="text-gold" />,
      title: "Head Office",
      detail: "Gokak, Belagavi District, Karnataka – 591307, India",
    },
    {
      icon: <Mail className="text-gold" />,
      title: "Email",
      detail: "varnayaexim@gmail.com",
    },
    {
      icon: <Phone className="text-gold" />,
      title: "WhatsApp / Phone",
      detail: "+91 7483540440",
    },
    {
      icon: <Linkedin className="text-gold" />,
      title: "LinkedIn",
      detail: "linkedin.com/company/varnaya-exim",
      href: "https://www.linkedin.com/company/varnaya-exim"
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#05142d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get in Touch" subtitle="CONTACT US">
          Our global trade team is ready to assist you.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Details */}
          <div className="space-y-6">
            {contactDetails.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-warm uppercase tracking-wider mb-1">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors text-lg font-medium">
                      {item.detail}
                    </a>
                  ) : (
                    <p className="text-white text-lg font-medium">{item.detail}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] glass-card rounded-3xl overflow-hidden relative group"
          >
             {/* Using a static map image or abstract representation for MVP */}
             <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Gokak,Karnataka&zoom=10&size=600x400&style=feature:all|element:labels.text.fill|color:0xffffff&style=feature:all|element:labels.text.stroke|color:0x000000&style=feature:landscape|color:0x05142d&style=feature:water|color:0x0d2e5e&style=feature:road|color:0xc79a42&key=YOUR_API_KEY')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors duration-500 flex items-center justify-center">
                <div className="text-center p-6 glass rounded-2xl backdrop-blur-md">
                   <MapPin className="w-10 h-10 text-gold mx-auto mb-2 animate-bounce" />
                   <h3 className="text-white font-bold text-xl">Varnaya EXIM HQ</h3>
                   <p className="text-gold">Gokak, Karnataka</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
