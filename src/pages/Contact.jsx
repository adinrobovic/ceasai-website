import { motion } from "framer-motion";
import PageTransition from "../PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0F1C] to-black text-white px-6 py-24 relative">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25)_0%,transparent_70%)] blur-3xl"></div>

        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h1>

         {/* Subtitle */}
        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Have questions or want to explore what CeasAI can do for your business?
          We're here to help.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Location */}
          <div className="bg-[#0A0F1C]/60 border border-gray-800 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Location</h3>
            <p className="text-gray-400">Metro Atlanta Area</p>
          </div>

          {/* Email */}
          <div className="bg-[#0A0F1C]/60 border border-gray-800 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Email</h3>
            <p className="text-gray-400 break-words">
              ceasai.solutions@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-[#0A0F1C]/60 border border-gray-800 p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">Phone</h3>
            <p className="text-gray-400">770-733-4745</p>
          </div>
        </motion.div>

        {/* AI Agent Intake Form */}
        <motion.form
          className="max-w-3xl mx-auto bg-[#0A0F1C]/50 border border-gray-800 p-10 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-4 text-center">
            Tell Us About Your Business
          </h2>

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-gray-300 mb-2">Business Name</label>
            <input
              type="text"
              placeholder="Enter your business name"
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Business Website */}
          <div>
            <label className="block text-gray-300 mb-2">Business Website (if any)</label>
            <input
              type="text"
              placeholder="https://yourbusiness.com"
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Business Description */}
          <div>
            <label className="block text-gray-300 mb-2">Describe Your Business</label>
            <textarea
              rows="5"
              placeholder="Tell us what your business does..."
              className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-700/50 transition"
          >
            Submit to AI Agent
          </button>

        </motion.form>
      </div>
    </PageTransition>
  );
}
