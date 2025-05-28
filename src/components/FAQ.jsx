import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes MountainMX different from other investment firms?",
      answer: "MountainMX is specifically designed for physicians, with investment strategies that account for the unique financial circumstances of medical professionals. Our team includes advisors with healthcare industry experience, and our investment options are tailored to complement medical career trajectories."
    },
    {
      question: "What is the minimum investment required?",
      answer: "Our investment plans start at $50,000 for early-career physicians. Different plans have different minimums based on the investment strategy and target returns. We can work with you to find the right entry point based on your current financial situation."
    },
    {
      question: "How liquid are these investments?",
      answer: "Most of our investment plans offer quarterly liquidity, meaning you can access your funds four times per year without penalties. Some specialized investments may have longer lock-up periods, which will be clearly disclosed before investment. We understand physicians may need access to capital for practice expansion or other opportunities."
    },
    {
      question: "What are the typical returns I can expect?",
      answer: "Our investment plans target annual returns ranging from 18% to 30%, depending on the risk profile and investment strategy. While past performance doesn't guarantee future results, our physician-focused portfolios have consistently outperformed traditional investment vehicles over the past decade."
    },
    {
      question: "How do you manage risk?",
      answer: "We employ a multi-layered risk management approach, including diversification across asset classes, geographic regions, and investment strategies. Our investment committee includes risk management specialists who continuously monitor market conditions and adjust portfolios accordingly. We also tailor risk profiles to your career stage and personal risk tolerance."
    },
    {
      question: "Can I invest through my retirement accounts?",
      answer: "Yes, many of our investment options are available through self-directed IRAs and other qualified retirement accounts. We can help you navigate the process of directing retirement funds into our investment vehicles while maintaining tax advantages."
    },
    {
      question: "Do you provide tax planning services?",
      answer: "While we're not a tax preparation firm, our investment strategies are designed with tax efficiency in mind. We work closely with your existing tax professionals to ensure investments align with your overall tax strategy. Our higher-tier plans include dedicated tax planning sessions."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get answers to common questions about investing with MountainMX.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-blue-600 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-4">Still have questions? We're here to help.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
