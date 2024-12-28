import { motion } from 'framer-motion';
import type { JourneyStep as JourneyStepType } from '../types';
import { Heart } from 'lucide-react';

interface Props {
  step: JourneyStepType;
  onNext: () => void;
}

export function JourneyStep({ step, onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center px-6 py-8"
    >
      {step.image && (
        <img 
          src={step.image} 
          alt={step.title}
          className="w-full h-48 object-cover rounded-2xl mb-6"
        />
      )}
      <h2 className="text-2xl font-bold text-pink-600 mb-4">{step.title}</h2>
      <p className="text-gray-700 font-serif italic mb-8">{step.content}</p>
      <button
        onClick={onNext}
        className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
      >
        Continuar
        <Heart className="w-4 h-4" />
      </button>
    </motion.div>
  );
}