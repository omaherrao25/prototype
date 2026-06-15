import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Img from './shared/Img'
import { IMAGES } from '../data/images'

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const posts = [
  { img: IMAGES.instagram[0], gradient: 'linear-gradient(135deg,#d4e8cc,#5f9a56)', tall: true },
  { img: IMAGES.instagram[1], gradient: 'linear-gradient(135deg,#fce4ee,#e87090)', tall: false },
  { img: IMAGES.instagram[2], gradient: 'linear-gradient(135deg,#ede4ff,#7c4dce)', tall: false },
  { img: IMAGES.instagram[3], gradient: 'linear-gradient(135deg,#fff5cc,#e8a000)', tall: true },
  { img: IMAGES.instagram[4], gradient: 'linear-gradient(135deg,#fef3e2,#C6A769)', tall: false },
  { img: IMAGES.instagram[5], gradient: 'linear-gradient(135deg,#e0f7f4,#1a7060)', tall: false },
]

const PostCard = ({ post, idx }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: idx * 0.06 }}
    className="relative group cursor-pointer overflow-hidden rounded-[3px] block w-full h-full"
  >
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full">
      <Img src={post.img} alt="Ecoveda lifestyle" className="w-full h-full" gradient={post.gradient} />
    </motion.div>
    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/25 transition-colors duration-400 flex items-center justify-center">
      <InstagramIcon size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.a>
)

export default function InstagramSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-9 lg:mb-11"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="rule" />
              <span className="eyebrow">@ecoveda_official</span>
            </div>
            <h2 className="font-heading text-[2.5rem] sm:text-[3.25rem] font-normal text-charcoal leading-[1.05] tracking-tight">
              From our community
            </h2>
          </div>
          <a href="#" className="link-quiet self-start sm:mb-2">
            <InstagramIcon size={14} /> Follow along
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 auto-rows-[150px] sm:auto-rows-[200px]">
          <div className="row-span-2"><PostCard post={posts[0]} idx={0} /></div>
          <PostCard post={posts[1]} idx={1} />
          <PostCard post={posts[2]} idx={2} />
          <div className="row-span-2"><PostCard post={posts[3]} idx={3} /></div>
          <PostCard post={posts[4]} idx={4} />
          <PostCard post={posts[5]} idx={5} />
        </div>
      </div>
    </section>
  )
}
