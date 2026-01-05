import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function PhoneButton() {
  return (
    <motion.a
      href="tel:+497141921912"
      className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -5 }}
    >
      <Phone size={28} />
    </motion.a>
  );
}
