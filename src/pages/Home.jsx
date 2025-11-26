import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../PageTransition";
import { FaDatabase, FaEnvelope, FaUsers, FaComments } from "react-icons/fa";
import logo from "../assets/CeasAI.png"

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0A0F1C] to-black text-white px-6">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25)_0%,transparent_70%)] blur-3xl"> </div>

        {/* Floating Glow Orbs */}
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>

        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-yellow-400/20 rounded-full blur-3xl animate-float-medium"></div>

        {/* Hero Content */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 text-transparent bg-clip-text mb-6">
            Empowering Businesses Through Custom AI Solutions.
          </h1>

          {/* Credibility Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-xl text-center max-w-xl mx-auto mb-8 shadow-lg"
          >
            <p className="text-sm text-blue-300 font-semibold tracking-wide">
              Trusted by D1 Training — Metro Atlanta
            </p>

            <p className="text-gray-300 text-sm italic mt-2">
              “CeasAI helps us respond faster and book more leads without adding staff.”
            </p>

            <p className="text-gray-400 text-xs mt-1">
              — D1 Training Peachtree Corners
            </p>
          </motion.div>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            At CeasAI, we take the time to understand your business, identify areas for improvement, 
            and develop tailored solutions to your goals. By combining your vision with our AI expertise, 
            we help your business operate smarter and grow faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/about"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-700/50 transition"
            >
              Learn More
            </Link>
            <Link
              to="/services"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Offerings Section */}
      <section className="py-24 bg-black text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <FaEnvelope />, text: "Automated Customer Emailing" },
            { icon: <FaDatabase />, text: "Database Integration" },
            { icon: <FaUsers />, text: "Client Lead Solutions" },
            { icon: <FaComments />, text: "Eliminating Window Shoppers with One-Line Communication & Booking" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-[#0A0F1C] to-[#05070D] p-8 rounded-xl border border-gray-800 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,122,255,0.3)] flex flex-col items-center justify-center transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-blue-400 text-3xl mb-4">{item.icon}</div>
              <p className="text-gray-200 text-lg font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <motion.section
        className="py-12 text-center text-gray-500 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Partner logos and testimonials coming soon...</p>
      </motion.section>
    </PageTransition>
  );
}