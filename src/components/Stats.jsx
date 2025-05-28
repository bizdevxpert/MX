import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserMd, FaRegLightbulb, FaRegChartBar } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: <FaChartLine className="text-blue-500 text-4xl" />,
      value: '32%',
      label: 'Average Annual Return',
      description: 'Outperforming traditional investment vehicles'
    },
    {
      icon: <FaUserMd className="text-blue-500 text-4xl" />,
      value: '500+',
      label: 'Physician Investors',
      description: 'Growing community of medical professionals'
    },
    {
      icon: <FaRegLightbulb className="text-blue-500 text-4xl" />,
      value: '12+',
      label: 'Years Experience',
      description: 'Proven track record of success'
    },
    {
      icon: <FaRegChartBar className="text-blue-500 text-4xl" />,
      value: '$120M+',
      label: 'Assets Under Management',
      description: 'Trust from our physician investors'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Proven Results for Physician Investors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our investment strategies are specifically designed for medical professionals, delivering consistent returns while minimizing risk.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</p>
                <p className="text-gray-500">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
