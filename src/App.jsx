import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import VoiceflowWidget from "./components/VoiceflowWidget";

const MemoNavbar = React.memo(Navbar);

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode ="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <VoiceflowWidget />
      <div className="bg-black min-h-screen text-white overflow-x-hidden">
        <MemoNavbar />
        <Suspense fallback={<div className="text-center p-10 text-gray-400">Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
      </div>
    </Router>
  );
}