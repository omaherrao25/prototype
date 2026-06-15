const messages = [
  'Free shipping on orders over ₹999',
  'Handmade in small batches',
  'Chemical-free & cruelty-free',
]

export default function AnnouncementBar() {
  return (
    <div className="bg-forest text-beige/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-9 flex items-center justify-center sm:justify-between">
          {/* Mobile: single rotating-feel line (static) */}
          <p className="sm:hidden font-body text-[11px] tracking-[0.12em]">
            Free shipping on orders over ₹999
          </p>

          {/* Desktop: three evenly spaced messages */}
          <div className="hidden sm:flex items-center gap-8 mx-auto">
            {messages.map((m, i) => (
              <div key={m} className="flex items-center gap-8">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-beige/30" />}
                <span className="font-body text-[11px] tracking-[0.14em]">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
