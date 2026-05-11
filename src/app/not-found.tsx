"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <h1 className="text-9xl font-heading font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-white mb-6">Shipment Lost in Transit?</h2>
        <p className="text-gray-warm text-lg max-w-md mx-auto mb-10">
          The page you are looking for doesn't exist or has been moved. Let's get you back to the golden trade routes.
        </p>
        <Link href="/">
          <Button variant="primary">
            Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
