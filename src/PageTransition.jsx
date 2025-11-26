import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}   // light exit animation (no movement)
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}