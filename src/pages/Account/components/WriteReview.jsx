import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WriteReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-4xl"
    >
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <button onClick={() => navigate('/account/order')} className="hover:text-blue-600 transition-colors">My Orders</button>
        <ChevronRight className="w-3 h-3" />
        <button onClick={() => navigate(`/account/order/${id}`)} className="hover:text-blue-600 transition-colors">{id}</button>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-900">write-review</span>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm">
        {/* Rate Product Section */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Rate this product</h2>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button 
              key={star}
              onClick={() => setRating(star)}
              className={`transition-colors focus:outline-none ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              <Star className="w-8 h-8 fill-current" />
            </button>
          ))}
        </div>
      </div>

      {/* Review Product Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Review this product</h2>
        
        <div className="border border-gray-200 rounded-sm overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200">
            <label className="block text-xs text-gray-500 mb-1">Description</label>
            <textarea 
              className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none resize-none h-32"
              placeholder="Description..."
            ></textarea>
          </div>
          <div className="p-4">
            <label className="block text-xs text-gray-500 mb-1">Title (optional)</label>
            <input 
              type="text" 
              className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              placeholder="Review title..."
            />
          </div>
        </div>

        <div className="flex justify-end items-end">
          <button 
            onClick={() => navigate(`/account/order/${id}`)}
            className="bg-[#ff6122] hover:bg-[#e6551b] text-white px-10 py-2.5 font-medium rounded-sm transition-colors"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default WriteReview;
