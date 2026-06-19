import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Check } from 'lucide-react';
import { filterOptions } from '../../../data/products';

const FilterSection = ({ title, options, activeFilters, onToggleFilter, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-black/5 py-5">
      <button 
        className="w-full flex items-center justify-between group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-body text-[11px] font-bold uppercase tracking-widest text-charcoal">{title}</span>
        <span className="text-charcoal/40 group-hover:text-charcoal transition-colors">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-5 flex flex-col gap-3">
              {options.map((option) => {
                const isActive = activeFilters.includes(option);
                return (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-colors ${isActive ? 'bg-charcoal border-charcoal' : 'border-charcoal/30 group-hover:border-charcoal/60'}`}>
                      {isActive && <Check size={10} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className="font-body text-[13px] text-charcoal/70 group-hover:text-charcoal transition-colors select-none">
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FilterSidebar({ activeFilters, onToggleFilter }) {
  return (
    <div className="w-full lg:w-[240px] flex-shrink-0">
      <FilterSection 
        title="Category" 
        options={filterOptions.categories} 
        activeFilters={activeFilters.categories || []} 
        onToggleFilter={(val) => onToggleFilter('categories', val)} 
        defaultOpen={true} 
      />
      <FilterSection 
        title="Skin Type" 
        options={filterOptions.skinTypes} 
        activeFilters={activeFilters.skinTypes || []} 
        onToggleFilter={(val) => onToggleFilter('skinTypes', val)} 
      />
      <FilterSection 
        title="Ingredients" 
        options={filterOptions.ingredients} 
        activeFilters={activeFilters.ingredients || []} 
        onToggleFilter={(val) => onToggleFilter('ingredients', val)} 
        defaultOpen={true}
      />
      <FilterSection 
        title="Scent" 
        options={filterOptions.scents} 
        activeFilters={activeFilters.scents || []} 
        onToggleFilter={(val) => onToggleFilter('scents', val)} 
      />
      <FilterSection 
        title="Concern" 
        options={filterOptions.concerns} 
        activeFilters={activeFilters.concerns || []} 
        onToggleFilter={(val) => onToggleFilter('concerns', val)} 
      />
    </div>
  );
}
