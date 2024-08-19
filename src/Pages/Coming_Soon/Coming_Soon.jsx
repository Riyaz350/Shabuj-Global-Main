import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Coming_Soon = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, );
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFF6FF] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-6xl font-bold text-[#2563EB]"
      >
        {`We're`} Coming Soon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg lg:text-2xl mt-4 text-[#2563EB]"
      >
        Exciting things are happening! Our new website is on its way.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex space-x-4 mt-8"
      >
        <a href="#" className="text-[#2563EB] text-2xl hover:text-[#1e40af]">
          <FaFacebookF />
        </a>
        <a href="#" className="text-[#2563EB] text-2xl hover:text-[#1e40af]">
          <FaTwitter />
        </a>
        <a href="#" className="text-[#2563EB] text-2xl hover:text-[#1e40af]">
          <FaInstagram />
        </a>
        <a href="#" className="text-[#2563EB] text-2xl hover:text-[#1e40af]">
          <FaLinkedinIn />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-12 text-[#2563EB]"
      >
        <p className="text-xl">Stay tuned for updates!</p>
      </motion.div>
    </div>
  );
};

export default Coming_Soon;
