import { products } from './products'

const p = (prompt, w = 600, h = 600, seed = 1) =>
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&nologo=true&seed=${seed}&model=flux`

export const productDetails = {
  'bestseller-2': {
    id: 'bestseller-2',
    name: 'Turmeric Glow Soap',
    tagline: 'Brightening & Radiance',
    rating: 4.8,
    reviewCount: 142,
    price: 249,
    originalPrice: 349,
    shortDescription:
      'Handcrafted with turmeric and botanical oils to brighten dull skin naturally while maintaining deep nourishment and softness.',
    longDescription:
      'Our Turmeric Glow Soap is a luxurious handcrafted bar that combines the ancient Ayurvedic wisdom of turmeric with modern botanical science. Each bar is carefully cold-processed to preserve the potent curcumin compounds that give turmeric its legendary skin-brightening properties. Enriched with virgin coconut oil and olive oil, this soap creates a rich, creamy lather that gently cleanses without stripping your skin\'s natural moisture barrier. The addition of pure aloe vera extract soothes and calms, while a blend of essential oils provides a subtle, earthy fragrance that transforms your daily cleansing ritual into a spa-like experience.',
    benefits: [
      { label: 'Brightening', icon: '✨', desc: 'Visibly brightens dull, uneven skin tone' },
      { label: 'Tan Removal', icon: '☀️', desc: 'Gradually reduces tan and dark spots' },
      { label: 'Gentle Cleansing', icon: '🫧', desc: 'Rich lather without stripping moisture' },
      { label: 'Handmade', icon: '🤲', desc: 'Cold-processed in small batches' },
      { label: 'Chemical Free', icon: '🌿', desc: 'No parabens, sulfates, or synthetics' },
    ],
    ingredients: [
      {
        name: 'Turmeric',
        benefit: 'Brightens and restores natural glow',
        desc: 'Wild-harvested turmeric root from Kerala, rich in curcumin — nature\'s most powerful antioxidant for skin radiance.',
        emoji: '✨',
        color: '#F59E0B',
        bg: '#FEF3C7',
      },
      {
        name: 'Coconut Oil',
        benefit: 'Deep nourishment and moisture lock',
        desc: 'Cold-pressed virgin coconut oil rich in lauric acid, providing intense hydration and a protective moisture barrier.',
        emoji: '🥥',
        color: '#92400E',
        bg: '#FFF7ED',
      },
      {
        name: 'Olive Oil',
        benefit: 'Rich antioxidant protection',
        desc: 'Extra virgin olive oil loaded with vitamins A and E, fighting free radicals and preventing premature aging.',
        emoji: '🫒',
        color: '#65A30D',
        bg: '#F7FEE7',
      },
      {
        name: 'Aloe Vera',
        benefit: 'Soothes and calms irritation',
        desc: 'Organic aloe vera gel that hydrates, soothes sunburn, and accelerates skin healing naturally.',
        emoji: '🌿',
        color: '#059669',
        bg: '#ECFDF5',
      },
      {
        name: 'Essential Oils',
        benefit: 'Aromatherapy and skin balance',
        desc: 'A curated blend of lavender and tea tree essential oils for gentle antibacterial action and calming fragrance.',
        emoji: '💧',
        color: '#7C3AED',
        bg: '#F5F3FF',
      },
    ],
    ingredientsList: 'Turmeric Extract, Coconut Oil, Olive Oil, Aloe Vera Gel, Lavender Essential Oil, Tea Tree Essential Oil, Shea Butter, Vitamin E, Glycerin',
    howToUse: [
      'Wet your face and hands with lukewarm water.',
      'Gently lather the soap between your palms to create a rich, creamy foam.',
      'Apply the lather to your face and body using gentle circular motions.',
      'Allow the turmeric-infused lather to sit for 30-60 seconds for maximum brightening benefit.',
      'Rinse thoroughly with cool water and pat dry with a soft towel.',
      'Use twice daily — morning and evening — for best results.',
    ],
    shippingInfo: {
      delivery: 'Free delivery on orders above ₹499',
      processing: 'Handcrafted & shipped within 2-3 business days',
      returns: '30-day hassle-free returns if unopened',
    },
    skinType: ['Normal', 'Oily'],
    concern: ['Brightening'],
    category: 'Facial Soaps',
    weight: '100g',
    shelfLife: '12 months',
    madeIn: 'India',
    images: [
      '/images/Turmeric%20soap.png',
      '/images/Turmeric%20soap%20without%20bg.png',
    ],
  },
}

// Automatically mock out the database by populating productDetails for all other products
const baseTemplate = productDetails['bestseller-2']

products.forEach(p => {
  if (p.id !== 'bestseller-2') {
    productDetails[p.id] = {
      ...baseTemplate,
      id: p.id,
      name: p.name,
      price: p.price,
      originalPrice: p.price + 100, // mock original price
      category: p.category,
      skinType: p.skinType,
      concern: p.concern,
      images: [p.image, p.image], // Mock gallery using the same image twice
      tagline: p.concern?.[0] || 'Natural Skincare',
    }
  }
})

export const recommendedProducts = [
  {
    id: 'bestseller-1',
    name: 'Neem & Tulsi Soap',
    benefit: 'Purifying & Acne Control',
    price: 249,
    rating: 4.7,
    image: '/images/Neem%20&%20Tulsi%20Soap.png',
  },
  {
    id: 'bestseller-4',
    name: 'Aloe Vera Soap',
    benefit: 'Deep Hydration & Soothing',
    price: 249,
    rating: 4.6,
    image: '/images/Aloe%20vera%20soap.png',
  },
  {
    id: 'bestseller-5',
    name: 'Rose Soap',
    benefit: 'Radiance & Moisture',
    price: 279,
    rating: 4.8,
    image: '/images/Rose%20Soap.png',
  },
  {
    id: 'bestseller-8',
    name: 'Saffron Glow Soap',
    benefit: 'Anti-aging & Luminosity',
    price: 329,
    rating: 4.9,
    image: '/images/Saffron%20Soap.png',
  },
]
