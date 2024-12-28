import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function InteractiveHeart() {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer"
    >
      <Heart
        className="w-20 h-20 text-red-500 filter drop-shadow-lg"
        fill="currentColor"
      />
    </motion.div>
  );
}