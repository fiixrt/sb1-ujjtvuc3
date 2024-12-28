import { motion } from 'framer-motion';
import type { MemoryCard as MemoryCardType } from '../types';

interface Props {
  memory: MemoryCardType;
  onComplete: () => void;
}

export function MemoryCard({ memory, onComplete }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      onClick={onComplete}
    >
      <img 
        src={memory.image} 
        alt={memory.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{memory.title}</h3>
        <p className="text-gray-600 italic">{memory.description}</p>
      </div>
    </motion.div>
  );
}