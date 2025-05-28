import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserMd, FaShieldAlt, FaRegLightbulb, FaRegChartBar, FaRegClock } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaChartLine className="text-blue-500 text-3xl" />,
      title: 'Physician-Focused Investments',
      description: 'Investment opportunities tailored to the unique financial needs and goals of medical professionals.'
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
      title: 'Risk-Managed Approach',
      description: 'Strategic diversification and risk management designed to protect your hard-earned capital.'
    },
    {
      icon: <FaRegLightbulb className="text-blue-500 text-3xl" />,
      title: 'Expert Advisory Team',
      description: 'Access to financial advisors who understand the unique challenges faced by physicians.'
    },
    {
      icon: <FaUserMd className="text-blue-500 text-3xl" />,
      title: 'Medical Industry Insights',
      description: 'Leverage your medical knowledge with investments that align with healthcare industry trends.'
    },
    {
      icon: <FaRegChartBar className="text-blue-500 text-3xl" />,
      title: 'Performance Tracking',
      description: 'Transparent reporting and real-time portfolio performance monitoring through our secure platform.'
    },
    {
      icon: <FaRegClock className="text-blue-500 text-3xl" />,
      title: 'Time-Efficient Solutions',
      description: 'Passive investment options that respect your busy schedule while maximizing returns.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Investment Features Designed for Physicians
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our platform offers unique advantages specifically tailored to medical professionals looking to grow their wealth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
