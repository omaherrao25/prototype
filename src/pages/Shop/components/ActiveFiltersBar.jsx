import { useState, useRef, useEffect } from 'react';
import { X, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sortOptions = [
  'Featured',
  'Best Selling',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
  'Most Loved'
];

export default function ActiveFiltersBar({ activeFilters, onRemoveFilter, onClearAll, totalItems, sortOption, setSortOption, searchQuery, setSearchQuery }) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const sortRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Flatten active filters into a single array for rendering
  const activeTags = [];
  Object.entries(activeFilters).forEach(([category, values]) => {
    values.forEach(val => activeTags.push({ category, value: val }));
  });

  // Close dropdown or search on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        if (!searchQuery) {
          setIsSearchExpanded(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchQuery]);

  const handleSearchClick = () => {
    if (!isSearchExpanded && !searchQuery) {
      setIsSearchExpanded(true);
      setTimeout(() => {
        searchContainerRef.current?.querySelector('input')?.focus();
      }, 50);
    }
  };

  return (
    <div className="py-6 border-b border-black/5 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Side: Active Filter Tags / Status */}
        <div className="flex flex-wrap items-center gap-3 flex-1 min-w-0">
          {activeTags.length > 0 ? (
            <button 
              onClick={onClearAll}
              className="font-body text-[10px] font-bold uppercase tracking-widest text-[#9C795C] hover:text-[#85654C] transition-colors underline underline-offset-4 mr-2 whitespace-nowrap flex-shrink-0"
            >
              Clear All
            </button>
          ) : (
            <span className="font-body text-[13px] text-charcoal/50 whitespace-nowrap flex-shrink-0">Showing all {totalItems} items</span>
          )}

          {activeTags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] rounded-full group cursor-pointer hover:bg-[#9C795C]/10 transition-colors flex-shrink-0" onClick={() => onRemoveFilter(tag.category, tag.value)}>
              <span className="font-body text-[11px] font-bold uppercase tracking-wider text-charcoal/70 group-hover:text-[#9C795C] whitespace-nowrap">{tag.value}</span>
              <X size={12} className="text-charcoal/40 group-hover:text-[#9C795C]" />
            </div>
          ))}
        </div>

        {/* Right Side: Search & Sort */}
        <div className="flex items-center gap-3 justify-end flex-shrink-0">
          
          {/* Expandable Search */}
          <motion.div 
            ref={searchContainerRef}
            initial={false}
            animate={{ width: isSearchExpanded || searchQuery ? 220 : 36 }}
            className={`relative flex items-center bg-white rounded-full shadow-sm overflow-hidden transition-colors ${isSearchExpanded || searchQuery ? 'border border-charcoal/10' : 'border border-transparent hover:border-charcoal/10 cursor-pointer'}`}
            onClick={handleSearchClick}
          >
            <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Search size={15} className="text-charcoal/60" />
            </div>
            
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pr-4 py-2 bg-transparent font-body text-[12.5px] text-charcoal placeholder:text-charcoal/40 focus:outline-none transition-opacity ${isSearchExpanded || searchQuery ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
          </motion.div>

          {/* Sort Dropdown */}
          <div className="relative z-50 flex-shrink-0" ref={sortRef}>
            <div 
              className="flex items-center gap-2 cursor-pointer group px-4 py-2 bg-white border border-charcoal/10 rounded-full shadow-sm hover:border-[#9C795C] transition-colors h-9"
              onClick={() => setIsSortOpen(!isSortOpen)}
            >
              <span className="font-body text-[11px] font-bold uppercase tracking-widest text-charcoal/60 group-hover:text-charcoal whitespace-nowrap">
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
                  className="absolute right-0 top-full mt-2 w-48 bg-white border border-black/5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-2"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 font-body text-[12.5px] transition-colors ${sortOption === option ? 'bg-[#9C795C]/10 text-[#9C795C] font-semibold' : 'text-charcoal/70 hover:bg-black/5 hover:text-charcoal'}`}
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>

  );
}
