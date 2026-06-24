import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, ShieldCheck, RefreshCw, Hand, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import assets
import heroBg from '../../assets/contact/hero_bg.png';
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
    <div className="bg-white min-h-screen pt-24 font-body text-[#1E1E1E]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden section-pad">
        {/* Abstract subtle background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={heroBg} 
            alt="Botanical shadow" 
            className="w-full h-full object-cover object-center mix-blend-multiply"
          />
        </div>

        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto py-12 lg:py-24">
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="eyebrow mb-6"
          >
            Contact Ecoveda
          </motion.p>
          <motion.h1 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal mb-6 text-[#314D3D]"
          >
            Let’s Connect.
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-[#1E1E1E]/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            We’re here to help you discover mindful skincare and answer every question with care and intention.
          </motion.p>
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact-form" className="btn-primary w-full sm:w-auto">
              Email Us
            </a>
            <Link to="/shop" className="btn-outline w-full sm:w-auto bg-white/50 backdrop-blur-sm">
              Explore Collection
            </Link>
          </motion.div>
        </div>
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
            <div className="relative p-10 lg:p-16 flex flex-col justify-center bg-[#FAF8F3]">
              <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply">
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
