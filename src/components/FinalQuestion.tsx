import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

interface Props {
  onAnswer: (answer: boolean) => void;
}

export function FinalQuestion({ onAnswer }: Props) {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setNoPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-8"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mb-8"
      >
        <Heart className="w-24 h-24 mx-auto text-red-500" fill="currentColor" />
      </motion.div>

      <h2 className="text-3xl font-bold text-pink-600 mb-12">
        Laura... ¿Quieres ser mi novia?
      </h2>

      <div className="relative flex justify-center items-center min-h-[100px]">
        <button
          onClick={() => onAnswer(true)}
          className="absolute px-8 py-4 bg-pink-500 text-white rounded-full text-lg font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all shadow-lg flex items-center gap-2"
        >
          <span>Sí</span>
          <Stars className="w-5 h-5" />
        </button>

        <AnimatePresence>
          {noCount < 5 && (
            <motion.button
              initial={{ opacity: 1 }}
              animate={{
                x: noPosition.x,
                y: noPosition.y,
                opacity: 1 - noCount * 0.2
              }}
              exit={{ opacity: 0 }}
              onClick={handleNo}
              className="absolute px-8 py-4 bg-gray-100 text-gray-600 rounded-full text-lg font-semibold transition-colors"
            >
              No
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}