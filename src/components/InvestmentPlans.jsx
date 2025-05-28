import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const InvestmentPlans = () => {
  const [activeTab, setActiveTab] = useState('early');

  const plans = {
    early: [
      {
        title: "Growth Starter",
        minInvestment: "$50,000",
        targetReturn: "18-22%",
        riskLevel: "Moderate",
        description: "Ideal for early-career physicians looking to establish a strong investment foundation.",
        features: [
          "Diversified portfolio across multiple asset classes",
          "Quarterly rebalancing and performance reviews",
          "Access to educational resources and webinars",
          "Annual one-on-one consultation with financial advisor"
        ]
      },
      {
        title: "Debt Reduction Plus",
        minInvestment: "$75,000",
        targetReturn: "20-24%",
        riskLevel: "Moderate-High",
        description: "Designed to help balance student loan repayment with wealth building.",
        features: [
          "Strategic allocation to higher-yield investments",
          "Integrated loan repayment optimization strategy",
          "Tax-efficient investment structure",
          "Bi-annual financial planning sessions",
          "Priority access to exclusive investment opportunities"
        ]
      }
    ],
    mid: [
      {
        title: "Wealth Accelerator",
        minInvestment: "$150,000",
        targetReturn: "24-28%",
        riskLevel: "Balanced",
        description: "Optimized for mid-career physicians with established practices and growing wealth.",
        features: [
          "Customized portfolio based on specialty and career trajectory",
          "Access to private equity and alternative investments",
          "Quarterly performance reviews with dedicated advisor",
          "Tax optimization strategies",
          "Estate planning integration"
        ]
      },
      {
        title: "Practice Growth",
        minInvestment: "$200,000",
        targetReturn: "26-30%",
        riskLevel: "Moderate-High",
        description: "Dual-purpose investment strategy that supports both personal wealth and practice expansion.",
        features: [
          "Specialized healthcare sector investments",
          "Practice acquisition and expansion funding options",
          "Monthly strategy sessions with investment committee",
          "Comprehensive tax planning",
          "Exclusive networking events with industry leaders"
        ]
      }
    ],
    late: [
      {
        title: "Legacy Builder",
        minInvestment: "$300,000",
        targetReturn: "22-26%",
        riskLevel: "Moderate",
        description: "Focused on wealth preservation and generational transfer for established physicians.",
        features: [
          "Conservative growth with income generation",
          "Comprehensive estate and succession planning",
          "Philanthropic integration options",
          "Quarterly family wealth meetings",
          "Dedicated family office services"
        ]
      },
      {
        title: "Retirement Maximizer",
        minInvestment: "$500,000",
        targetReturn: "18-22%",
        riskLevel: "Low-Moderate",
        description: "Designed for physicians approaching retirement with emphasis on income and capital preservation.",
        features: [
          "Income-focused investment strategy",
          "Retirement distribution planning",
          "Healthcare cost projection and planning",
          "Monthly portfolio reviews",
          "Concierge wealth management services",
          "Legacy and charitable giving strategies"
        ]
      }
    ]
  };

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Investment Plans for Every Career Stage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tailored investment strategies that evolve with your medical career, from residency to retirement.
          </motion.p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('early')}
              className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                activeTab === 'early'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Early Career
            </button>
            <button
              onClick={() => setActiveTab('mid')}
              className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                activeTab === 'mid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Mid Career
            </button>
            <button
              onClick={() => setActiveTab('late')}
              className={`px-6 py-3 rounded-full font-medium text-lg transition-colors ${
                activeTab === 'late'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Late Career
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans[activeTab].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="opacity-90">{plan.description}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Minimum Investment</p>
                    <p className="text-gray-900 font-bold text-xl">{plan.minInvestment}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Target Annual Return</p>
                    <p className="text-gray-900 font-bold text-xl">{plan.targetReturn}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Risk Level</p>
                    <p className="text-gray-900 font-bold text-xl">{plan.riskLevel}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 text-sm">Liquidity</p>
                    <p className="text-gray-900 font-bold text-xl">Quarterly</p>
                  </div>
                </div>
                
                <h4 className="font-bold text-lg mb-4">Key Features</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1 text-blue-500">
                        <FaCheck />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Request Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
