import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    return products.filter(product => {
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
  }, [activeFilters]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
      {/* Header Area */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 text-center">
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
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal"
        >
          Shop All
        </motion.h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
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
          />

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-32 flex flex-col items-center justify-center text-center">
              <p className="font-heading text-2xl text-charcoal/40 mb-4">No products found</p>
              <p className="font-body text-[14px] text-charcoal/60 max-w-md">Try adjusting your filters or clearing them to see more products.</p>
              <button 
                onClick={handleClearAll}
                className="mt-8 px-8 py-3 bg-charcoal text-white font-body text-[11px] uppercase tracking-widest hover:bg-black transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Load More (Mock) */}
          {filteredProducts.length > 0 && (
            <div className="mt-24 flex flex-col items-center">
              <p className="font-body text-[12px] text-charcoal/50 mb-6">Showing {filteredProducts.length} of {products.length} items</p>
              <button className="px-12 py-4 bg-[#314D3D] text-[#F6F1E9] font-body text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#23382c] transition-colors shadow-sm">
                Load More
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
