import { X, ChevronDown } from 'lucide-react';

export default function ActiveFiltersBar({ activeFilters, onRemoveFilter, onClearAll, totalItems }) {
  // Flatten active filters into a single array for rendering
  const activeTags = [];
  Object.entries(activeFilters).forEach(([category, values]) => {
    values.forEach(val => activeTags.push({ category, value: val }));
  });

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

      <div className="mt-4 sm:mt-0 flex items-center gap-2 cursor-pointer group">
        <span className="font-body text-[11px] font-bold uppercase tracking-widest text-charcoal/60 group-hover:text-charcoal">Sort By</span>
        <ChevronDown size={14} className="text-charcoal/40 group-hover:text-charcoal" />
      </div>
    </div>
  );
}
