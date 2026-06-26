import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Settings, 
  LogOut 
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'my-account', label: 'My Account', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col gap-2 sticky top-32">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 text-sm font-medium tracking-wide ${
              activeTab === item.id
                ? 'bg-eco-beige text-eco-green'
                : 'text-eco-text/70 hover:bg-eco-beige/50 hover:text-eco-green'
            }`}
          >
            <item.icon strokeWidth={1.5} className="w-5 h-5" />
            {item.label}
          </button>
        ))}
        
        <div className="h-px w-full bg-eco-border my-4"></div>
        
        <button className="flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 text-sm font-medium tracking-wide text-red-700/80 hover:bg-red-50 hover:text-red-700">
          <LogOut strokeWidth={1.5} className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Mobile Horizontal Navigation */}
      <div className="lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide pb-2">
        <div className="flex gap-2 min-w-max">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-medium whitespace-nowrap ${
                activeTab === item.id
                  ? 'bg-eco-green text-white shadow-md'
                  : 'bg-eco-beige/50 text-eco-text/80'
              }`}
            >
              <item.icon strokeWidth={1.5} className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
