import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure Your Financial Future with Medical Expertise
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Exclusive investment opportunities designed specifically for physicians. Leverage your medical knowledge into strategic financial growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ScrollLink
                to="plans"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors w-full sm:w-auto">
                  View Investment Plans
                </button>
              </ScrollLink>
              <ScrollLink
                to="benefits"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-md font-medium text-lg transition-colors w-full sm:w-auto">
                  Learn More
                </button>
              </ScrollLink>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                    alt={`Investor ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="ml-4 text-blue-100">
                Joined by <span className="font-bold">500+</span> physicians nationwide
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-blue-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Dr. John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-blue-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium mb-1">Medical Specialty</label>
                  <select
                    id="specialty"
                    className="w-full px-4 py-3 bg-white/5 border border-blue-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="" className="bg-blue-800">Select Specialty</option>
                    <option value="cardiology" className="bg-blue-800">Cardiology</option>
                    <option value="neurology" className="bg-blue-800">Neurology</option>
                    <option value="oncology" className="bg-blue-800">Oncology</option>
                    <option value="pediatrics" className="bg-blue-800">Pediatrics</option>
                    <option value="surgery" className="bg-blue-800">Surgery</option>
                    <option value="other" className="bg-blue-800">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Get Personalized Plan
                </button>
              </form>
              <p className="text-xs mt-4 text-blue-100">
                Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollLink
          to="stats"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-blue-100 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-blue-100 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-blue-100 rounded-full mt-2"
            />
          </motion.div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
