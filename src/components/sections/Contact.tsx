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
            className="h-full min-h-[400px] glass-card rounded-3xl overflow-hidden relative group border border-white/10"
          >
             <iframe
               title="Varnaya EXIM Headquarters Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30672.435777418967!2d74.8085449!3d16.1706846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf14197365f543%3A0x7d06689d0092c733!2sGokak%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715425624731!5m2!1sen!2sin"
               width="100%"
               height="100%"
               style={{ 
                 border: 0, 
                 filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(0.9) grayscale(0.5)' 
               }}
               allowFullScreen
               loading="lazy"
               className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
             ></iframe>
             
             {/* Gradient Overlay for subtle branding */}
             <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
             
             <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                <span className="glass px-3 py-1 rounded-full text-[10px] text-white/50 uppercase tracking-widest">
                   Interactive Map
                </span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
