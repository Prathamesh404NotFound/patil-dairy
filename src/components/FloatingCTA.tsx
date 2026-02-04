import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919890679500?text=Hello%2C%20I%20would%20like%20to%20order%20fresh%20dairy%20products"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919890679500"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full gradient-maroon text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Call"
      >
        <FiPhone className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingCTA;
