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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Please enter your requirements";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "Turmeric Powder",
      message: "",
    });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const text = `Hello Varnaya EXIM, I am ${formData.name} from ${formData.company}. I would like to inquire about ${formData.product}. My requirements: ${formData.message}`;
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
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.span 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  className="text-gold text-4xl"
                >
                  ✓
                </motion.span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Inquiry Received!</h3>
              <p className="text-gray-warm">
                Thank you for reaching out to Varnaya EXIM. Our trade experts will contact you shortly.
              </p>
              <Button 
                variant="glass" 
                className="mt-8"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Inquiry
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rfq-name" className="block text-sm font-medium text-gray-warm mb-2">Full Name *</label>
                  <input 
                    id="rfq-name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="rfq-company" className="block text-sm font-medium text-gray-warm mb-2">Company Name</label>
                  <input 
                    id="rfq-company"
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
                  <label htmlFor="rfq-email" className="block text-sm font-medium text-gray-warm mb-2">Email Address *</label>
                  <input 
                    id="rfq-email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="rfq-phone" className="block text-sm font-medium text-gray-warm mb-2">Phone Number *</label>
                  <input 
                    id="rfq-phone"
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="rfq-product" className="block text-sm font-medium text-gray-warm mb-2">Product Interested In</label>
                <select 
                  id="rfq-product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-[#0D2E5E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="Turmeric Powder">Premium Turmeric Powder</option>
                  <option value="Fresh Ginger">Fresh Ginger</option>
                  <option value="Vegetables">Export Quality Vegetables</option>
                  <option value="Spices">Agricultural Spices</option>
                  <option value="Other">Other Commodities</option>
                </select>
              </div>

              <div>
                <label htmlFor="rfq-message" className="block text-sm font-medium text-gray-warm mb-2">Message & Quantity Requirements *</label>
                <textarea 
                  id="rfq-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none`}
                  placeholder="Please specify your requirements..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Inquiry"}
                </Button>
                <Button 
                  type="button" 
                  variant="glass" 
                  className="flex-1" 
                  onClick={handleWhatsApp}
                  disabled={isSubmitting}
                >
                  Inquire via WhatsApp
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
