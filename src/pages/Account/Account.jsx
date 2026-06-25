import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import OrdersList from './components/OrdersList';
import Wishlist from './components/Wishlist';
import SavedAddresses from './components/SavedAddresses';
import AccountSettings from './components/AccountSettings';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview setActiveTab={setActiveTab} />;
      case 'orders':
        return <OrdersList />;
      case 'wishlist':
        return <Wishlist />;
      case 'addresses':
        return <SavedAddresses />;
      case 'settings':
        return <AccountSettings />;
      default:
        return <DashboardOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-eco-bg pt-24 pb-16 font-body">
      <div className="container-pad max-w-[1400px]">
        {/* Header - Mobile Only */}
        <div className="lg:hidden mb-8">
          <h1 className="font-heading text-3xl text-eco-text">My Account</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {/* Header - Desktop Only */}
            <div className="hidden lg:block mb-10">
              <h1 className="font-heading text-4xl text-eco-text capitalize tracking-wide">
                {activeTab === 'dashboard' ? 'Overview' : activeTab}
              </h1>
              <div className="h-px w-16 bg-eco-gold/60 mt-4"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
