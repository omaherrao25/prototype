import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import FilterSidebar from './components/FilterSidebar';
import ActiveFiltersBar from './components/ActiveFiltersBar';
import ProductCard from './components/ProductCard';
import { products } from '../../data/products';

export default function Shop() {
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    skinTypes: [],
    ingredients: [],
    concerns: [],
    scents: []
  });
  const [sortOption, setSortOption] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Lock body scroll when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileFilterOpen]);

  const handleToggleFilter = (category, value) => {
    setActiveFilters(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  const handleRemoveFilter = (category, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item !== value)
    }));
  };

  const handleClearAll = () => {
    setActiveFilters({
      categories: [],
      skinTypes: [],
      ingredients: [],
      concerns: [],
      scents: []
    });
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      // Check Search Query
      if (searchQuery.trim() !== '') {
        if (!product.name.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
          return false;
        }
      }
 
      // Check Categories
      if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) return false;
      
      // Check Skin Types (product.skinType is an array)
      if (activeFilters.skinTypes.length > 0) {
        const hasMatch = product.skinType.some(type => activeFilters.skinTypes.includes(type) || type === 'All');
        if (!hasMatch) return false;
      }

      // Check Ingredients (product.ingredients is an array)
      if (activeFilters.ingredients.length > 0) {
        const hasMatch = product.ingredients.some(ing => activeFilters.ingredients.includes(ing));
        if (!hasMatch) return false;
      }

      // Check Concerns (product.concern is an array)
      if (activeFilters.concerns.length > 0) {
        const hasMatch = product.concern.some(c => activeFilters.concerns.includes(c));
        if (!hasMatch) return false;
      }

      // Check Scents
      if (activeFilters.scents.length > 0 && !activeFilters.scents.includes(product.scent)) return false;

      return true;
    });

    // Apply Sorting
    switch (sortOption) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Best Selling':
        result.sort((a, b) => (b.isBestSeller === a.isBestSeller) ? 0 : b.isBestSeller ? 1 : -1);
        break;
      // Featured, Newest, Most Loved can default to initial order for now
      default:
        break;
    }

    return result;
  }, [activeFilters, sortOption, searchQuery]);

  return (
    <div className="min-h-screen bg-white pt-24 lg:pt-28 pb-16">
      {/* Header Area */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8 lg:mb-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/50 mb-4"
        >
          Ecoveda Collection
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#9C795C] font-normal uppercase tracking-wide"
        >
          Shop All
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Sticky Sidebar */}
        <div className="w-full lg:w-[240px] flex-shrink-0 lg:sticky lg:top-32">
          <FilterSidebar activeFilters={activeFilters} onToggleFilter={handleToggleFilter} />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          <ActiveFiltersBar 
            activeFilters={activeFilters} 
            onRemoveFilter={handleRemoveFilter} 
            onClearAll={handleClearAll}
            totalItems={filteredProducts.length}
            sortOption={sortOption}
            setSortOption={setSortOption}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:gap-y-10">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <p className="font-heading text-2xl text-charcoal/40 mb-4">No products found</p>
              <p className="font-body text-[14px] text-charcoal/60 max-w-md">Try adjusting your filters or clearing them to see more products.</p>
              <button 
                onClick={handleClearAll}
                className="mt-8 px-8 py-3 bg-[#2F4F3A] text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] font-body text-[11px] uppercase tracking-widest hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Load More (Mock) */}
          {filteredProducts.length > 0 && (
            <div className="mt-12 lg:mt-16 flex flex-col items-center">
              <p className="font-body text-[12px] text-charcoal/50 mb-6">Showing {filteredProducts.length} of {products.length} items</p>
              <button className="px-10 py-4 bg-[#2F4F3A] text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] font-body text-[11px] font-bold uppercase tracking-[0.15em] hover:scale-105 transition-all duration-300">
                Load More
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Sticky Mobile Filter Button */}
      <div className="lg:hidden sticky-bottom-cta flex justify-center">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full sm:w-[300px] flex items-center justify-center gap-2 py-4 bg-[#2F4F3A] text-white rounded-full font-body text-[13px] font-bold uppercase tracking-widest shadow-luxury min-h-touch"
        >
          <SlidersHorizontal size={16} />
          Filters & Sort
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 z-[60] lg:hidden backdrop-blur-sm"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-0 h-[85vh] z-[70] bg-white rounded-t-[32px] overflow-hidden lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
            >
              <FilterSidebar 
                activeFilters={activeFilters} 
                onToggleFilter={handleToggleFilter} 
                isMobileDrawer={true} 
                onClose={() => setIsMobileFilterOpen(false)} 
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
