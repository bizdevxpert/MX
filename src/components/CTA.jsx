import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Financial Future?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-10"
          >
            Join hundreds of physicians who have already discovered the MountainMX advantage. Schedule your personalized consultation today and take the first step toward financial independence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="(555) 123-4567"
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
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-blue-300/30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Tell us about your investment goals and any specific questions you have."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-blue-50 text-blue-900 px-6 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Schedule Your Consultation
                </button>
              </div>
            </form>
            <p className="text-xs mt-4 text-blue-100">
              By submitting this form, you agree to our privacy policy and terms of service. Your information will never be shared with third parties.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
