import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, MapPin, Package, User, CreditCard, LifeBuoy } from 'lucide-react';
import SupportBanner from './SupportBanner';

const DashboardOverview = ({ setActiveTab }) => {
  const statCards = [
    { label: 'Orders', value: '12', icon: ShoppingBag, tab: 'orders' },
    { label: 'Wishlist Items', value: '8', icon: Heart, tab: 'wishlist' },
    { label: 'Saved Addresses', value: '3', icon: MapPin, tab: 'addresses' },
  ];

  const quickActions = [
    { label: 'Track Orders', icon: Package, tab: 'orders' },
    { label: 'Edit Profile', icon: User, tab: 'settings' },
    { label: 'Manage Addresses', icon: MapPin, tab: 'addresses' },
    { label: 'Payment Methods', icon: CreditCard, tab: 'settings' },
    { label: 'Wishlist', icon: Heart, tab: 'wishlist' },
    { label: 'Support', icon: LifeBuoy, tab: 'dashboard' }, // Might trigger a scroll or modal in reality
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Profile Overview */}
      <motion.div 
        className="bg-offwhite border border-eco-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        whileHover={{ y: -2 }}
      >
        <div className="w-24 h-24 rounded-full bg-eco-beige overflow-hidden flex-shrink-0 flex items-center justify-center border-2 border-white shadow-sm">
          {/* Placeholder for Avatar */}
          <span className="font-heading text-4xl text-eco-green">PS</span>
        </div>
        <div className="text-center sm:text-left flex-1">
          <h2 className="font-heading text-3xl text-eco-text mb-1">Priya Sharma</h2>
          <p className="text-eco-text/70 text-sm mb-3">priya.sharma@example.com</p>
          <div className="inline-block bg-eco-beige/80 text-eco-green text-xs font-medium px-3 py-1 rounded-full tracking-wide">
            Mindful Skincare Member
          </div>
        </div>
      </motion.div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, idx) => (
          <motion.div
            key={idx}
            onClick={() => setActiveTab(stat.tab)}
            className="bg-offwhite border border-eco-border rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-eco-beige/50 flex items-center justify-center group-hover:bg-eco-green group-hover:text-white transition-colors duration-300 text-eco-green">
                <stat.icon strokeWidth={1.5} className="w-5 h-5" />
              </div>
            </div>
            <div className="font-heading text-4xl text-eco-text mb-1">{stat.value}</div>
            <div className="text-sm text-eco-text/70 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="font-heading text-2xl text-eco-text mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              onClick={() => action.tab !== 'dashboard' && setActiveTab(action.tab)}
              className="bg-offwhite border border-eco-border rounded-xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer group hover:border-eco-green/30 hover:shadow-sm transition-all duration-300 min-h-[100px]"
              whileHover={{ scale: 1.02 }}
            >
              <action.icon strokeWidth={1.5} className="w-6 h-6 text-eco-green/70 group-hover:text-eco-green transition-colors duration-300" />
              <span className="text-sm font-medium text-eco-text text-center">{action.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support Banner */}
      <SupportBanner />
    </div>
  );
};

export default DashboardOverview;
