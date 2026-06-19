import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import Img from './shared/Img'

// Local blog photos from public/images (encode spaces in filenames)
const img = (file) => encodeURI(`/images/${file}`)

const posts = [
  {
    id: 1,
    title: 'Benefits of Natural Soaps for Your Skin',
    excerpt: 'Discover why switching from chemical-based soaps to handmade natural soaps can transform your skin in just 2 weeks.',
    category: 'Skincare',
    readTime: '4 min read',
    image: img('Skincare blog.png'),
    gradient: 'linear-gradient(135deg,#d4e8cc,#4a9e42)',
  },
  {
    id: 2,
    title: 'Skincare Tips for Glowing Skin This Summer',
    excerpt: "Our skin experts share the ultimate summer skincare routine using Ecoveda's all-natural products.",
    category: 'Tips & Tricks',
    readTime: '5 min read',
    image: img('Tips & Tricks blog.png'),
    gradient: 'linear-gradient(135deg,#fce8f0,#e879a0)',
  },
  {
    id: 3,
    title: 'Why We Choose Handmade Over Mass Production',
    excerpt: 'A behind-the-scenes look at how our artisans craft each batch with patience, precision and love.',
    category: 'Our Story',
    readTime: '3 min read',
    image: img('Our Story blog.png'),
    gradient: 'linear-gradient(135deg,#fef3e2,#C6A769)',
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-9 lg:mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="rule" />
              <span className="eyebrow">The Journal</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-normal tracking-wide text-[#9C795C] uppercase">
              Notes on natural living
            </h2>
          </div>
          <a href="#" className="link-quiet self-start sm:mb-2">
            View all posts <ArrowRight size={12} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-[3px] overflow-hidden mb-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <Img src={post.image} alt={post.title} className="w-full h-full" gradient={post.gradient} />
                </motion.div>
              </div>

              {/* Text */}
              <div className="flex items-center gap-3 mb-3 text-[11px] font-body text-charcoal/40">
                <span className="text-forest font-medium tracking-[0.1em] uppercase">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-charcoal/20" />
                <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
              </div>
              <h3 className="font-heading text-[1.4rem] font-normal text-charcoal leading-snug mb-2.5 group-hover:text-forest transition-colors duration-300">
                {post.title}
              </h3>
              <p className="font-body text-[13px] text-charcoal/50 leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
