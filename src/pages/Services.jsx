import { motion } from "framer-motion";
import PageTransition from "../PageTransition";
import { FaRobot, FaDatabase, FaEnvelope, FaCogs, FaChartLine, FaUsers } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaRobot />,
      title: "Custom AI Automation",
      desc: "We design AI agents and workflow automations that reduce manual work, streamline operations, and improve efficiency.",
    },
    {
      icon: <FaEnvelope />,
      title: "Automated Customer Messaging",
      desc: "Smart email & SMS systems that respond instantly, nurture leads, and keep customers engaged 24/7.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      desc: "Connect your systems, unify your data, and enable AI-driven insights with seamless backend integration.",
    },
    {
      icon: <FaUsers />,
      title: "Lead Management Solutions",
      desc: "Capture, qualify, and route leads intelligently — eliminate lost opportunities and boost conversion rates.",
    },
    {
      icon: <FaCogs />,
      title: "Business Workflow Optimization",
      desc: "We analyze your operations and redesign workflows using AI and automation to increase output and reduce overhead.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth & Analytics Tools",
      desc: "Insights dashboards, performance tracking, and predictive analytics to help your business scale smarter.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0F1C] to-black text-white px-6 py-24 relative">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25)_0%,transparent_70%)] blur-3xl"></div>

        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          CeasAI builds custom-built AI solutions designed to power business growth.  
          Whether you're looking to automate tasks, modernize operations, or enhance customer engagement —  
          we create AI systems tailored to your needs.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0A0F1C]/60 border border-gray-800 p-10 rounded-2xl shadow-lg hover:border-blue-500 hover:shadow-[0_0_20px_rgba(0,122,255,0.3)] transition duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="text-blue-400 text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-300 mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8">
            Let’s build something powerful together.
          </p>

          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-700/50 transition text-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}