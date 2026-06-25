import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, ShieldCheck, RefreshCw, Hand, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import assets
import formBg from '../../assets/contact/form_bg.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@ecoveda.com',
    link: 'mailto:hello@ecoveda.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 98765 43210',
    link: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'India • Worldwide Shipping',
    link: '#'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon – Sat\n10:00 AM – 7:00 PM',
    link: '#'
  }
];

const trustFeatures = [
  { icon: Globe, text: 'Worldwide Shipping' },
  { icon: ShieldCheck, text: 'Secure Payments' },
  { icon: RefreshCw, text: 'Easy Returns' },
  { icon: Hand, text: 'Handmade Products' },
  { icon: Leaf, text: 'Skin-Friendly Ingredients' },
  { icon: Heart, text: 'Cruelty Free' }
];

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <div className="bg-white min-h-screen font-body text-[#1E1E1E]">

      {/* 1. HERO SECTION */}
      <section
        ref={ref}
        className="relative min-h-[85vh] flex items-center overflow-hidden bg-white"
      >
        {/* Background botanical image with parallax */}
        <motion.div
          className="absolute inset-0 z-0 scale-110"
          style={{ y: bgY }}
        >
          <img
            src="/images/contact_hero_minimal.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Subtle cinematic overlay */}
        <div className="absolute inset-0 z-10 bg-black/5 mix-blend-overlay pointer-events-none"></div>

        {/* Center Wide Blur Effect */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[150%] sm:w-[150%] max-w-[1200px] max-h-[1000px] backdrop-blur-[8px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"></div>
        </div>

        {/* Center Wide Color Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[150%] sm:w-[150%] max-w-[1200px] max-h-[1000px] bg-white/85 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]"></div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-32 lg:pb-16"
          style={{ y: textY }}
        >
          <div className="w-full mx-auto text-center">

            <motion.p 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="eyebrow mb-6 text-charcoal/60 uppercase tracking-widest text-[11px] font-medium"
            >
              Contact Ecoveda
            </motion.p>
            
            {/* Main Heading */}
            <motion.h1 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-heading font-light text-charcoal mb-8 leading-[1.1]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)' }}
            >
              Let’s Connect.
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-body text-[1rem] sm:text-[1.1rem] lg:text-[1.15rem] leading-[1.8] text-charcoal/60 max-w-xl mx-auto mb-12"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We’re here to help you discover mindful skincare and answer every question with care and intention.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
            >
              <a 
                href="#contact-form" 
                className="group relative px-8 py-4 bg-[#2F4F3A] text-white text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(49,77,61,0.25)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10">Email Us</span>
                <div className="absolute inset-0 bg-[#3A6046] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </a>
              <Link 
                to="/shop" 
                className="px-8 py-4 border border-[#1E1E1E]/15 text-[#1E1E1E]/60 text-[11.5px] sm:text-[12px] font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:border-[#2F4F3A]/40 hover:text-[#2F4F3A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore Collection
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. CONTACT INFORMATION SECTION */}
      <section className="section-pad bg-[#FAF8F3]/30">
        <div className="container-pad">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {contactCards.map((card, index) => (
              <motion.a
                href={card.link}
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(49, 77, 61, 0.08)' }}
                className="bg-white border border-[#E9E4DC] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#EFE7DC]/40 flex items-center justify-center mb-6 text-[#314D3D]">
                  <card.icon strokeWidth={1.5} size={22} />
                </div>
                <h3 className="font-heading text-xl font-medium mb-3 text-[#1E1E1E]">{card.title}</h3>
                <p className="text-[14px] text-[#1E1E1E]/60 whitespace-pre-line leading-relaxed">
                  {card.content}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. LUXURY CONTACT FORM SECTION */}
      <section id="contact-form" className="section-pad">
        <div className="container-pad max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border border-[#E9E4DC] rounded-[2rem] overflow-hidden bg-white shadow-luxury">

            {/* Left Side: Editorial Content */}
            <div className="relative p-10 lg:p-16 flex flex-col justify-center">
              <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_70%,transparent)] lg:[mask-image:linear-gradient(to_right,black_60%,transparent)]">
                <img
                  src={formBg}
                  alt="Soft botanical light"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl text-[#314D3D] mb-6">
                  We’d love to hear from you.
                </h2>
                <p className="text-base text-[#1E1E1E]/70 leading-relaxed max-w-md">
                  Whether you have questions about ingredients, skincare rituals, shipping, or collaborations — our team is always here to help.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-10 lg:p-16 bg-white relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center bg-white z-20"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#EFE7DC] text-[#314D3D] flex items-center justify-center mb-6">
                      <Mail strokeWidth={1.5} size={28} />
                    </div>
                    <h3 className="font-heading text-3xl text-[#314D3D] mb-4">Thank You.</h3>
                    <p className="text-[#1E1E1E]/60">
                      Your message has been received with care. We will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-[#1E1E1E]/80 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F3] border border-[#E9E4DC] rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#C7A06C] focus:bg-white focus:ring-4 focus:ring-[#C7A06C]/10 transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-[#1E1E1E]/80 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F3] border border-[#E9E4DC] rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#C7A06C] focus:bg-white focus:ring-4 focus:ring-[#C7A06C]/10 transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-[#1E1E1E]/80 uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F3] border border-[#E9E4DC] rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#C7A06C] focus:bg-white focus:ring-4 focus:ring-[#C7A06C]/10 transition-all"
                          placeholder="+91 XXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-medium text-[#1E1E1E]/80 uppercase tracking-wider">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-[#FAF8F3] border border-[#E9E4DC] rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#C7A06C] focus:bg-white focus:ring-4 focus:ring-[#C7A06C]/10 transition-all"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[12px] font-medium text-[#1E1E1E]/80 uppercase tracking-wider">Message</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full bg-[#FAF8F3] border border-[#E9E4DC] rounded-xl px-5 py-3.5 text-sm outline-none focus:border-[#C7A06C] focus:bg-white focus:ring-4 focus:ring-[#C7A06C]/10 transition-all resize-none"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary py-4 rounded-xl text-[13px] hover:shadow-lg transition-all"
                    >
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUPPORT & TRUST SECTION */}
      <section className="py-16 border-t border-[#E9E4DC]">
        <div className="container-pad">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12"
          >
            {trustFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-3 text-[#1E1E1E]/70 hover:text-[#314D3D] transition-colors group cursor-default"
              >
                <feature.icon size={20} strokeWidth={1.5} className="text-[#C7A06C] group-hover:scale-110 transition-transform" />
                <span className="text-[13px] font-medium tracking-wide">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <section className="py-24 lg:py-32 relative bg-white overflow-hidden">
        {/* Soft decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#EFE7DC]/50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#314D3D]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-pad relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-[#314D3D] mb-6 leading-tight">
              Mindful skincare begins <br className="hidden md:block" /> with intentional care.
            </h2>
            <p className="text-base text-[#1E1E1E]/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Explore handcrafted skincare inspired by nature and designed for everyday rituals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/shop" className="btn-primary rounded-full px-8">
                Shop Bestsellers
              </Link>
              <Link to="/about" className="btn-outline bg-white rounded-full px-8">
                Explore Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
