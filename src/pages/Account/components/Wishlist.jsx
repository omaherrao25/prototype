import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingCart } from 'lucide-react';

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Coffee Scrub Soap (100g)',
      price: '₹199',
      ingredient: 'Roasted Coffee & Cocoa',
      image: '/images/Coffee soap without bg.png',
    },
    {
      id: 2,
      name: 'Turmeric Glow Soap (100g)',
      price: '₹179',
      ingredient: 'Turmeric & Sandalwood',
      image: '/images/Turmeric soap without bg.png',
    },
    {
      id: 3,
      name: 'Aloe Vera & Mint Soap (100g)',
      price: '₹149',
      ingredient: 'Fresh Aloe & Peppermint',
      image: '/images/Aloe vera soap.png',
    }
  ];

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {wishlistItems.map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          key={item.id}
          className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-center group"
        >
          {/* Image */}
          <div className="w-20 h-20 flex-shrink-0 bg-[#FDFBF7] rounded-lg p-2 border border-beige-dark/20 group-hover:border-beige-dark/40 transition-colors">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          
          {/* Details */}
          <div className="flex-1 flex flex-col sm:flex-row w-full items-center justify-between gap-6">
            <div className="flex-[2] text-center sm:text-left">
              <h3 className="text-gray-900 font-medium text-lg tracking-tight group-hover:text-[#2F4F3A] transition-colors">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Ingredient: {item.ingredient}</p>
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <span className="font-semibold text-gray-900 text-lg">{item.price}</span>
            </div>

            <div className="flex-[1.5] flex flex-col items-center sm:items-end gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#ff6122] hover:bg-[#e6551b] text-white flex items-center justify-center gap-2 py-2.5 px-6 rounded-md text-sm font-medium transition-colors shadow-sm">
                <ShoppingCart strokeWidth={2} className="w-4 h-4" />
                Add to Cart
              </button>
              <button className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 text-sm font-medium transition-colors mt-1">
                <Trash2 strokeWidth={2} className="w-4 h-4" /> Remove
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Wishlist;
