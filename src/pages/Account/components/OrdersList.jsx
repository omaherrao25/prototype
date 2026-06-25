import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle2, XCircle } from 'lucide-react';

const OrdersList = () => {
  const orders = [
    {
      id: 'ORD-2023-1042',
      date: 'Oct 24, 2026',
      status: 'Delivered',
      total: '$124.00',
      items: [
        { name: 'Botanical Night Serum', quantity: 1, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
        { name: 'Organic Rosehip Oil', quantity: 1, image: 'https://images.unsplash.com/photo-1608248593842-83b6cb5922eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
      ]
    },
    {
      id: 'ORD-2023-0988',
      date: 'Sep 12, 2026',
      status: 'Processing',
      total: '$85.00',
      items: [
        { name: 'Hydrating Clay Mask', quantity: 2, image: 'https://images.unsplash.com/photo-1596755389378-c11ddece8a47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
      ]
    },
    {
      id: 'ORD-2023-0855',
      date: 'Aug 05, 2026',
      status: 'Shipped',
      total: '$42.00',
      items: [
        { name: 'Exfoliating Body Scrub', quantity: 1, image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
      ]
    }
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'Delivered':
        return { icon: CheckCircle2, color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-200' };
      case 'Processing':
        return { icon: Package, color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' };
      case 'Shipped':
        return { icon: Truck, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-200' };
      case 'Cancelled':
        return { icon: XCircle, color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' };
      default:
        return { icon: Package, color: 'text-eco-text', bg: 'bg-eco-beige', border: 'border-eco-border' };
    }
  };

  return (
    <div className="space-y-6">
      {orders.map((order, idx) => {
        const statusConfig = getStatusConfig(order.status);
        const StatusIcon = statusConfig.icon;

        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={order.id}
            className="bg-offwhite border border-eco-border rounded-2xl p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow duration-300 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-eco-border/50 pb-6">
              <div>
                <p className="text-sm text-eco-text/60 mb-1">Order {order.id}</p>
                <p className="font-medium text-eco-text">Placed on {order.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="text-sm text-eco-text/60 mb-1">Total</p>
                  <p className="font-medium text-eco-text">{order.total}</p>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color}`}>
                  <StatusIcon strokeWidth={2} className="w-4 h-4" />
                  <span className="text-sm font-medium">{order.status}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {order.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-eco-beige flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-eco-text">{item.name}</h4>
                    <p className="text-sm text-eco-text/60">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:justify-end">
              <button className="btn-outline px-6 py-2.5 text-sm w-full sm:w-auto">View Details</button>
              <button className="btn-primary px-6 py-2.5 text-sm w-full sm:w-auto">Track Order</button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrdersList;
