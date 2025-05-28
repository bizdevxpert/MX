import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    "Tax-advantaged investment structures designed for high-income physicians",
    "Passive income streams that don't require active management",
    "Diversification beyond traditional stocks and bonds",
    "Protection against market volatility and economic downturns",
    "Opportunities aligned with healthcare industry knowledge",
    "Personalized investment strategies based on career stage and goals"
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Physicians Choose Mountain<span className="text-blue-300">MX</span></h2>
            <p className="text-xl mb-8 text-blue-100">
              We understand the unique financial challenges and opportunities that come with a medical career. Our investment approach is designed to complement your professional journey.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="mr-3 mt-1 bg-blue-500 p-1 rounded-full">
                    <FaCheck className="text-white text-sm" />
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Physician investor" 
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="bg-blue-800 p-6 rounded-lg -mt-20 ml-10 mr-10 relative">
                <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-100 mb-4">Cardiologist & Investor</p>
                <p className="italic text-blue-200">
                  "As a physician, I needed an investment strategy that understood my unique financial situation. MountainMX provided exactly that, with returns that have exceeded my expectations."
                </p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500 rounded-xl -z-10 blur-xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
