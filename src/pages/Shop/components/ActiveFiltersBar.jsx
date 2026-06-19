import { useState, useRef, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sortOptions = [
  'Featured',
  'Best Selling',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
  'Most Loved'
];

export default function ActiveFiltersBar({ activeFilters, onRemoveFilter, onClearAll, totalItems, sortOption, setSortOption }) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  // Flatten active filters into a single array for rendering
  const activeTags = [];
  Object.entries(activeFilters).forEach(([category, values]) => {
    values.forEach(val => activeTags.push({ category, value: val }));
  });

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-black/5 mb-8">
      <div className="flex flex-wrap items-center gap-3">
        {activeTags.length > 0 ? (
          <button 
            onClick={onClearAll}
            className="font-body text-[10px] font-bold uppercase tracking-widest text-charcoal/50 hover:text-charcoal transition-colors underline underline-offset-4 decoration-charcoal/30 hover:decoration-charcoal mr-2"
          >
            Clear All
          </button>
        ) : (
          <span className="font-body text-[13px] text-charcoal/50">Showing all {totalItems} items</span>
        )}

        {activeTags.map((tag, idx) => (
          <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/5 rounded-sm shadow-sm group cursor-pointer" onClick={() => onRemoveFilter(tag.category, tag.value)}>
            <span className="font-body text-[11px] font-bold uppercase tracking-wider text-charcoal/70 group-hover:text-charcoal">{tag.value}</span>
            <X size={12} className="text-charcoal/40 group-hover:text-charcoal" />
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-0 relative" ref={sortRef}>
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          <span className="font-body text-[11px] font-bold uppercase tracking-widest text-charcoal/60 group-hover:text-charcoal">
            Sort By{sortOption !== 'Featured' && `: ${sortOption}`}
          </span>
          <ChevronDown size={14} className="text-charcoal/40 group-hover:text-charcoal" />
        </div>

        <AnimatePresence>
          {isSortOpen && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-full mt-2 w-48 bg-white border border-black/5 rounded-md shadow-lg py-2 z-50"
            >
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortOption(option);
                    setIsSortOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 font-body text-[13px] transition-colors ${sortOption === option ? 'bg-black/5 text-charcoal font-semibold' : 'text-charcoal/70 hover:bg-black/5 hover:text-charcoal'}`}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
