import React from 'react';
import { motion } from 'framer-motion';

const SupportBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-3xl bg-eco-beige border border-eco-border/50 mt-12 group"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-eco-gold/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      {/* Botanical Shadow Overlay mockup */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1597505199656-749e491e5e01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>

      <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl text-eco-text mb-4 leading-tight">
            Need help with your <br className="hidden md:block" /> skincare journey?
          </h2>
          <p className="text-eco-text/80 text-lg md:text-xl font-light">
            Our support team is always here to assist you with orders, skincare questions, and product guidance.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
          <button className="bg-eco-green text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-eco-green/90 transition-colors duration-300 w-full sm:w-auto shadow-luxury">
            Contact Support
          </button>
          <button className="bg-white/80 backdrop-blur text-eco-green border border-eco-green/20 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white transition-colors duration-300 w-full sm:w-auto">
            Explore Collection
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SupportBanner;
