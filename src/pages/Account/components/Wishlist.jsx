import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Revitalizing Face Serum',
      price: '$58.00',
      ingredient: 'Rosehip & Vitamin C',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      name: 'Purifying Clay Mask',
      price: '$34.00',
      ingredient: 'Matcha & Bentonite',
      image: 'https://images.unsplash.com/photo-1596755389378-c11ddece8a47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Nourishing Body Butter',
      price: '$45.00',
      ingredient: 'Shea & Cocoa',
      image: 'https://images.unsplash.com/photo-1608248593842-83b6cb5922eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {wishlistItems.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          key={item.id}
          className="bg-white rounded-2xl overflow-hidden border border-eco-border group hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-eco-beige">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-eco-text/70 hover:text-red-500 hover:bg-white transition-colors duration-300">
              <Trash2 strokeWidth={1.5} className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="mb-4">
              <span className="text-xs font-medium tracking-widest text-eco-gold uppercase mb-2 block">
                {item.ingredient}
              </span>
              <h3 className="font-heading text-2xl text-eco-text">{item.name}</h3>
              <p className="text-lg text-eco-text/80 mt-1">{item.price}</p>
            </div>
            
            <button className="w-full btn-outline border-eco-border flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-eco-green hover:text-white hover:border-eco-green transition-all duration-300">
              <ShoppingCart strokeWidth={1.5} className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Wishlist;
