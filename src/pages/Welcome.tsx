import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export function Welcome({ onStart }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center p-8"
    >
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Laura</h1>
      <p className="text-xl text-gray-700 mb-8 font-serif italic">
        Tengo algo muy especial que compartir contigo...
      </p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-colors flex items-center gap-2 mx-auto"
      >
        <span>Comenzar</span>
        <Heart className="w-4 h-4" />
      </button>
    </motion.div>
  );
}