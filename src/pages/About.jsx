import { motion } from "framer-motion";
import PageTransition from "../PageTransition";
import Nolan from "../assets/NolanPeirce.png"
import Matt from "../assets/MattJones.jpg"

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0F1C] to-black text-white px-6 py-24">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25)_0%,transparent_70%)] blur-3xl"></div>

        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h1>

        {/* Purpose */}
        <motion.p
          className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          At CeasAI, our purpose is to empower businesses with custom-built AI solutions
          that drive efficiency, innovation, and growth.
        </motion.p>

        {/* Our Story Section */}
        <motion.section
          className="max-w-4xl mx-auto bg-[#0A0F1C]/60 border border-gray-800 p-10 rounded-2xl shadow-lg mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Story</h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            CeasAI was founded by <span className="text-blue-300 font-semibold">Nolan Pierce </span> 
            and <span className="text-blue-300 font-semibold">Matt Jones</span> in October of 2024 —
            two lifelong friends whose partnership began on the basketball court.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            As teammates in high school, they learned the importance of discipline, teamwork, 
            and the value of hard work.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            After graduating, both pursued careers in technology. Matt earned his degree in 
            Cybersecurity from Montreat College, while Jaylen graduated with a degree in 
            Management of Information Systems from the University of West Georgia.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Their shared passion for innovation and curiosity about the rapid expansion of AI 
            sparked the idea for CeasAI — a company built to help businesses utilize AI in 
            ethical and effective ways.
          </p>

           <p className="text-gray-300 leading-relaxed">
            As young professionals, they are driven to stay ahead of the AI curve, create 
            custom business solutions, and maximize potential. CeasAI represents their belief 
            that hard work fuels innovation, grounded in ethical purpose within the AI industry.
          </p>
        </motion.section>

        {/* Our Team */}
        <motion.section
          className="max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">Meet Our Team</h2>

          {/* Grid of Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Nolan */}
            <motion.div
              className="flex flex-col items-center bg-[#0A0F1C]/50 border border-gray-800 p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={Nolan}
                alt="Nolan placeholder"
                className="w-40 h-40 rounded-full object-cover object-[center_20%] mb-6 border border-gray-700"
              />
              <h3 className="text-xl font-semibold text-blue-300">Nolan Pierce</h3>
              <p className="text-gray-400 mt-2 text-center text-sm">
                Co-founder • MIS Graduate • AI Innovator
              </p>
            </motion.div>

            {/* Matt */}
            <motion.div
              className="flex flex-col items-center bg-[#0A0F1C]/50 border border-gray-800 p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={Matt}
                alt="Matt placeholder"
                className="w-40 h-40 rounded-full object-cover object-[center_30%] mb-6 border border-gray-700"
              />
              <h3 className="text-xl font-semibold text-blue-300">Matt Jones</h3>
              <p className="text-gray-400 mt-2 text-center text-sm">
                Co-founder • Cybersecurity Graduate • AI Strategist
              </p>
            </motion.div>
            </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}