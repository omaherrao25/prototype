import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  { id: 'howToUse', label: 'How to use' },
  { id: 'benefits', label: 'Benefit' },
  { id: 'ingredients', label: 'Ingredients' },
  { id: 'shipping', label: 'Return Policy' },
]

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('howToUse')

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex w-full justify-between border-b border-charcoal/10 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 pb-3 text-center font-body text-[11.5px] tracking-wide whitespace-nowrap transition-colors duration-300 ${
              activeTab === tab.id
                ? 'text-forest font-semibold'
                : 'text-charcoal/40 hover:text-charcoal/70'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="product-tab-indicator"
                className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-forest"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-6 pb-2 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'howToUse' && (
              <div className="space-y-4">
                <p className="font-body text-[12.5px] text-charcoal/60 leading-[1.8]">
                  We always recommend that you speak to your GP before you embark on taking any new regimen. Everyone is different and your GP is best positioned to provide specific guidance for your unique situation.
                </p>
                <ol className="space-y-3">
                  {product.howToUse.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest/5 text-forest font-body text-[11px] font-bold flex items-center justify-center mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="font-body text-[12.5px] text-charcoal/60 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-beige/20 border border-beige-dark/10"
                  >
                    <span className="text-xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <h4 className="font-body text-[12px] font-semibold text-charcoal mb-0.5">
                        {benefit.label}
                      </h4>
                      <p className="font-body text-[11.5px] text-charcoal/50 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <p className="font-body text-[12.5px] text-charcoal/60 leading-[1.8] mb-5">
                  <span className="font-semibold text-charcoal/80">Full Ingredients:</span>{' '}
                  {product.ingredientsList}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-medium border"
                      style={{
                        backgroundColor: `${ing.bg}40`,
                        color: ing.color,
                        borderColor: `${ing.color}20`,
                      }}
                    >
                      <span>{ing.emoji}</span>
                      {ing.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-4">
                <ShippingRow icon="🚚" title="Delivery" text={product.shippingInfo.delivery} />
                <ShippingRow icon="↩️" title="Returns" text={product.shippingInfo.returns} />
                <div className="p-4 rounded-xl bg-beige/20 border border-beige-dark/10">
                  <p className="font-body text-[12px] text-charcoal/50 leading-relaxed">
                    We ship across India via trusted courier partners. For any return or shipping-related queries, please reach out to our support team within 7 days of delivery.
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

function ShippingRow({ icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <h4 className="font-body text-[12px] font-semibold text-charcoal mb-0.5">{title}</h4>
        <p className="font-body text-[12px] text-charcoal/50">{text}</p>
      </div>
    </div>
  )
}
