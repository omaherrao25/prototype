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
  const [sortOption, setSortOption] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');



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
    <div className="min-h-screen bg-white pt-28 lg:pt-32 pb-20">
      {/* Header Area */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 lg:mb-14 text-center">
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

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        
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
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 lg:gap-y-12">
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
                className="mt-8 px-8 py-3 bg-[#2F4F3A] text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] font-body text-[11px] uppercase tracking-widest hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Load More (Mock) */}
          {filteredProducts.length > 0 && (
            <div className="mt-16 lg:mt-20 flex flex-col items-center">
              <p className="font-body text-[12px] text-charcoal/50 mb-6">Showing {filteredProducts.length} of {products.length} items</p>
              <button className="px-10 py-4 bg-[#2F4F3A] text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] font-body text-[11px] font-bold uppercase tracking-[0.15em] hover:scale-105 transition-all duration-300">
                Load More
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
