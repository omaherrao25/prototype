import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Check, X } from 'lucide-react';
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
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={isActive} 
                      onChange={() => onToggleFilter(option)} 
                    />
                    <div className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-colors ${isActive ? 'bg-[#9C795C] border-[#9C795C]' : 'border-charcoal/30 group-hover:border-[#9C795C]/60'}`}>
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

export default function FilterSidebar({ activeFilters, onToggleFilter, isMobileDrawer, onClose }) {
  const content = (
    <>
      <FilterSection 
        title="Category" 
        options={filterOptions.categories} 
        activeFilters={activeFilters.categories || []} 
        onToggleFilter={(val) => onToggleFilter('categories', val)} 
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
    </>
  );

  if (isMobileDrawer) {
    return (
      <div className="flex flex-col h-full bg-white">
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <span className="font-heading text-2xl text-charcoal">Filters</span>
          <button onClick={onClose} className="p-2 -mr-2 text-charcoal/60 hover:text-charcoal rounded-full">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-2">
          {content}
        </div>
        <div className="p-6 border-t border-black/5 pb-safe-b bg-white">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-[#2F4F3A] text-white rounded-full font-body text-[13px] font-bold uppercase tracking-widest min-h-touch"
          >
            Apply Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-[240px] flex-shrink-0 hidden lg:block">
      {content}
    </div>
  );
}
