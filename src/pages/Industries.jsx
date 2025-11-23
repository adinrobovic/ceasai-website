import { motion } from "framer-motion";
import PageTransition from "../PageTransition";

export default function Industries() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0F1C] to-black text-white px-6 py-24">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25)_0%,transparent_70%)] blur-3xl"></div>

        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Partners & Collaborations
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          We're actively expanding our network of partners, collaborators, and AI-driven innovators.
          Check back soon to see the companies and organizations working with CeasAI.
        </motion.p>

        {/* Placeholder Partner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              className="h-40 bg-[#0A0F1C]/50 border border-gray-800 rounded-xl flex flex-col items-center justify-center shadow-lg hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,122,255,0.3)] transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gray-700/40 rounded-lg mb-4"></div>

              <p className="text-gray-400 text-sm">
                Partner / Logo Coming Soon
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-gray-500 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>More collaborations will be announced soon...</p>
        </motion.div>

        {/* Extra space to ensure scrollability */}
        <div className="h-[50vh]"></div>

      </div>
    </PageTransition>
  );
}