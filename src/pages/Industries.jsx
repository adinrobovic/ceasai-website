import { motion } from "framer-motion";
import PageTransition from "../PageTransition";
import D1 from "../assets/D1.png";
// 1) Drop your logos into /src/assets/ and import them here:

// import activateLogo from "../assets/activate-health-logo.png";

export default function Industries() {
  const partners = [
    {
      name: "D1 Training — Peachtree Corners",
      logo: D1,
      focus: "Lead response automation + booking workflows",
      testimonialHeading: "Trusted by D1 Training — Peachtree Corners",
      testimonial:
        "“CeasAI has been a great help to our business. I call them my AI guys. From our first meeting, they have priortized finding way to understand my business' needs, and developing creative and customized solutions. The sky is the limit for CeasAI as they continue to grow in the AI space”",
      byline: "— From Roald Owner of D1 Training Peachtree Corners",
    },
    {
      name: "Activate Health",
      // logo: activateLogo,
      focus: "Client intake automation + scheduling support",
      testimonialHeading: "Trusted by Activate Health",
      testimonial:
        "“CeasAI streamlined our communication and made booking significantly easier for our clients.”",
      byline: "— Activate Health",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0A0F1C] to-black text-white px-6 py-24 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25)_0%,transparent_70%)] blur-3xl" />

        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Partners & Collaborations
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          We’re proud to support businesses across Metro Atlanta with AI-driven
          automations that improve lead response, communication, and booking.
        </motion.p>

        {/* Real Partner Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {partners.map((p, idx) => (
            <motion.div
              key={p.name}
              className="bg-[#0A0F1C]/50 border border-gray-800 rounded-2xl p-8 shadow-lg hover:border-blue-500 hover:shadow-[0_0_25px_rgba(0,122,255,0.25)] transition duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Logo + Name */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-gray-700/40" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{p.focus}</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-gray-300 mb-2">{p.testimonialHeading}</p>
                <p className="text-gray-100 italic leading-relaxed">{p.testimonial}</p>
                <p className="text-gray-400 text-sm mt-4">{p.byline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          className="max-w-6xl mx-auto mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-gray-500">
            <p className="mb-6">More partner logos and collaborations coming soon…</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-28 bg-[#0A0F1C]/40 border border-gray-800 rounded-xl flex items-center justify-center text-gray-500 text-sm"
              >
                Partner / Logo Coming Soon
              </div>
            ))}
          </div>
        </motion.div>

        {/* Keep scrollability (optional) */}
        <div className="h-[35vh]" />
      </div>
    </PageTransition>
  );
}