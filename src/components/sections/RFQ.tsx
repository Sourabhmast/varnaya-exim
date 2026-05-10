"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function RFQ() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "Turmeric Powder",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = `Hello Varnaya EXIM, I am ${formData.name} from ${formData.company}. I would like to inquire about ${formData.product}.`;
    window.open(`https://wa.me/917483540440?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="rfq" className="py-24 relative z-10 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Request a Quote" subtitle="START TRADING">
          Partner with us for premium quality agricultural commodities. Fill out the form below or contact us directly on WhatsApp.
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-warm mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-warm mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Global Imports LLC"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-warm mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-warm mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-warm mb-2">Product Interested In</label>
              <select 
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full bg-primary border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
              >
                <option value="Turmeric Powder">Premium Turmeric Powder</option>
                <option value="Fresh Ginger">Fresh Ginger</option>
                <option value="Vegetables">Export Quality Vegetables</option>
                <option value="Spices">Agricultural Spices</option>
                <option value="Other">Other Commodities</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-warm mb-2">Message & Quantity Requirements</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Please specify your requirements..."
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="button" variant="primary" className="flex-1">
                Submit Inquiry
              </Button>
              <Button type="button" variant="glass" className="flex-1" onClick={handleWhatsApp}>
                Inquire via WhatsApp
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
