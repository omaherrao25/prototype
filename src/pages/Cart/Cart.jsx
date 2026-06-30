import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowLeft, Leaf, ShieldCheck, HeartHandshake, Package, RotateCcw, Truck, ArrowRight } from 'lucide-react';
import './Cart.css';

const initialCart = [
  {
    id: 1,
    name: 'Rose Soap',
    category: 'Facial Soaps',
    price: 279.00,
    quantity: 1,
    image: '/images/Rose Soap without bg.png',
    tag: 'Hydration & Brightening'
  },
  {
    id: 2,
    name: 'Neem & Tulsi Soap',
    category: 'Body Soaps',
    price: 249.00,
    quantity: 1,
    image: '/images/Neem Soap without bg.png',
    tag: 'Acne & Detox'
  },
  {
    id: 3,
    name: 'Turmeric Glow Soap',
    category: 'Facial Soaps',
    price: 249.00,
    quantity: 1,
    image: '/images/Turmeric soap without bg.png',
    tag: 'Brightening'
  }
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 49.00;
  const tax = subtotal * 0.18;
  const total = subtotal > 0 ? subtotal + shipping + tax : 0;

  const freeShippingThreshold = 1500;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="cart-page"
    >
      <div className="cart-container">

        <div className="cart-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: '#1E1E1E' }}>Cart</span>
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="cart-header-title"
        >
          Your Cart
        </motion.h1>



        <div className="cart-layout">
          {/* Left Side: Cart Items & Shipping Progress */}
          <div className="cart-items-section">



            {cart.length > 0 ? (
              <>
                <div className="cart-items-header">
                  <div>Product</div>
                  <div>Price</div>
                  <div style={{ textAlign: 'center' }}>Quantity</div>
                  <div style={{ textAlign: 'right' }}>Total</div>
                </div>

                <AnimatePresence>
                  {cart.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="cart-item"
                    >
                      <div className="item-product">
                        <div className="item-image-wrapper">
                          <img src={item.image} alt={item.name} className="item-image" />
                        </div>
                        <div className="item-info">
                          <div className="item-title">{item.name}</div>
                          <div className="item-category">{item.category}</div>
                          <div className="item-tag">
                            <Leaf size={12} strokeWidth={2} />
                            {item.tag}
                          </div>
                        </div>
                      </div>

                      <div className="item-price">
                        ₹{item.price.toFixed(2)}
                      </div>

                      <div className="cart-item-mobile-actions">
                        <div className="quantity-selector">
                          <button onClick={() => updateQuantity(item.id, -1)} className="qty-btn" aria-label="Decrease quantity">
                            <Minus size={16} strokeWidth={2} />
                          </button>
                          <span className="qty-value">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="qty-btn" aria-label="Increase quantity">
                            <Plus size={16} strokeWidth={2} />
                          </button>
                        </div>

                        {/* Mobile specific total */}
                        <div className="item-total" style={{ display: 'none' /* Handled by css normally */ }}>
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      <div className="item-total" style={{ display: 'flex', justifyContent: 'flex-end', gap: '24px' }}>
                        ₹{(item.price * item.quantity).toFixed(2)}
                        <button onClick={() => removeItem(item.id)} className="remove-btn" aria-label="Remove item">
                          <X size={16} strokeWidth={2} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="empty-cart"
                style={{ padding: '48px 0', textAlign: 'center', color: 'rgba(30,30,30,0.6)' }}
              >
                <p style={{ fontSize: '18px', marginBottom: '16px' }}>Your cart is currently empty.</p>
                <Link to="/shop" className="checkout-btn" style={{ width: 'auto', display: 'inline-flex' }}>
                  Return to Shop
                </Link>
              </motion.div>
            )}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="cart-shipping-progress"
              style={{ marginTop: '32px', marginBottom: '0px' }}
            >
              <Leaf className="shipping-icon" size={24} strokeWidth={1.5} />
              <div className="shipping-details">
                {remainingForFreeShipping > 0 ? (
                  <div className="shipping-text">
                    Your order qualifies for free shipping!
                    <span className="shipping-amount">₹{subtotal.toFixed(0)} / ₹{freeShippingThreshold}</span>
                  </div>
                ) : (
                  <div className="shipping-text">
                    Congratulations! You get free shipping.
                  </div>
                )}
                <div className="shipping-bar-container">
                  <div
                    className="shipping-bar-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {remainingForFreeShipping > 0 && (
                  <div style={{ fontSize: '13px', color: 'rgba(30,30,30,0.6)', marginTop: '8px' }}>
                    Add ₹{remainingForFreeShipping.toFixed(2)} more to get free shipping.
                  </div>
                )}
              </div>
            </motion.div>

            <Link to="/shop" className="continue-shopping">
              <ArrowLeft size={16} strokeWidth={2} />
              Continue Shopping
            </Link>
          </div>

          {/* Right Side: Order Summary */}
          <div className="cart-summary-section">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="summary-wrapper"
            >
              <div className="order-summary">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span className="summary-row-bold">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="summary-row-bold">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div style={{ fontSize: '12px', color: 'rgba(30,30,30,0.5)', marginTop: '-12px', marginBottom: '16px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <Truck size={12} /> Standard Delivery (3-5 days)
                  </div>
                )}

                <div className="summary-row">
                  <span>Tax (GST 18%)</span>
                  <span className="summary-row-bold">₹{tax.toFixed(2)}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">
                  <span className="total-label">Total</span>
                  <span className="total-value">₹{total.toFixed(2)}</span>
                </div>
                <div className="tax-note">Inclusive of all taxes</div>

                <div className="eco-note">
                  <Leaf className="eco-icon" size={16} strokeWidth={2} />
                  <div className="eco-text">
                    We use eco-friendly packaging for a better tomorrow.
                  </div>
                </div>



                <button className="checkout-btn" disabled={cart.length === 0} style={{ opacity: cart.length === 0 ? 0.5 : 1 }}>
                  Proceed to Checkout
                  <ArrowRight size={18} strokeWidth={2} />
                </button>

                <div className="trust-indicators">
                  <div className="trust-item">
                    <ShieldCheck className="trust-icon" size={24} strokeWidth={1.5} />
                    <span className="trust-text">Secure<br />Payments</span>
                  </div>
                  <div className="trust-item">
                    <Leaf className="trust-icon" size={24} strokeWidth={1.5} />
                    <span className="trust-text">Natural<br />& Safe</span>
                  </div>
                  <div className="trust-item">
                    <HeartHandshake className="trust-icon" size={24} strokeWidth={1.5} />
                    <span className="trust-text">Cruelty<br />Free</span>
                  </div>
                  <div className="trust-item">
                    <RotateCcw className="trust-icon" size={24} strokeWidth={1.5} />
                    <span className="trust-text">Easy<br />Returns</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </motion.div>
  );
}
