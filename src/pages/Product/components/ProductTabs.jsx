import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { id: 'description', label: 'Description' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'howToUse', label: 'How To Use' },
  { id: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-0 border-b border-beige-dark/40 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-4 font-body text-[13px] tracking-wide whitespace-nowrap transition-colors duration-300 ${
              activeTab === tab.id
                ? 'text-forest font-semibold'
                : 'text-charcoal/40 hover:text-charcoal/70'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="product-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-forest"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-8 pb-4 min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 'description' && (
              <div className="max-w-2xl">
                <p className="font-body text-[15px] leading-[1.85] text-charcoal/65">
                  {product.longDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <InfoPill label="Weight" value={product.weight} />
                  <InfoPill label="Shelf Life" value={product.shelfLife} />
                  <InfoPill label="Made In" value={product.madeIn} />
                  <InfoPill label="Skin Type" value={product.skinType.join(', ')} />
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                {product.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-beige/30 border border-beige-dark/20 hover:border-sage/20 hover:shadow-card transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{benefit.icon}</span>
                    <div>
                      <h4 className="font-body text-[14px] font-semibold text-charcoal mb-1">
                        {benefit.label}
                      </h4>
                      <p className="font-body text-[13px] text-charcoal/50 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="max-w-2xl">
                <p className="font-body text-[14px] text-charcoal/60 leading-[1.8] mb-6">
                  <span className="font-semibold text-charcoal/80">Full Ingredients:</span>{' '}
                  {product.ingredientsList}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing.name}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-body font-medium border transition-colors duration-200 hover:shadow-sm"
                      style={{
                        backgroundColor: `${ing.bg}`,
                        color: ing.color,
                        borderColor: `${ing.color}25`,
                      }}
                    >
                      <span>{ing.emoji}</span>
                      {ing.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'howToUse' && (
              <div className="max-w-2xl">
                <ol className="space-y-4">
                  {product.howToUse.map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-start gap-4"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest/8 text-forest font-heading text-[15px] font-medium flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <p className="font-body text-[14px] text-charcoal/60 leading-relaxed pt-1.5">
                        {step}
                      </p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="max-w-2xl space-y-5">
                <ShippingRow icon="🚚" title="Delivery" text={product.shippingInfo.delivery} />
                <ShippingRow icon="📦" title="Processing" text={product.shippingInfo.processing} />
                <ShippingRow icon="↩️" title="Returns" text={product.shippingInfo.returns} />
                <div className="mt-8 p-5 rounded-2xl bg-beige/30 border border-beige-dark/20">
                  <p className="font-body text-[13px] text-charcoal/50 leading-relaxed">
                    We ship across India via trusted courier partners. International shipping is currently not available. For any shipping-related queries, please reach out to our support team.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function InfoPill({ label, value }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-beige-dark/25 shadow-sm">
      <span className="font-body text-[11px] font-bold uppercase tracking-wider text-charcoal/35">
        {label}
      </span>
      <span className="w-px h-3.5 bg-beige-dark/40" />
      <span className="font-body text-[13px] font-medium text-charcoal/75">{value}</span>
    </div>
  )
}

function ShippingRow({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-beige/20 transition-colors duration-200">
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <h4 className="font-body text-[14px] font-semibold text-charcoal mb-0.5">{title}</h4>
        <p className="font-body text-[13px] text-charcoal/50">{text}</p>
      </div>
    </div>
  )
}
