import { motion } from 'framer-motion';

interface Props {
  verses: string[];
}

export function PoemDisplay({ verses }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-4 font-serif italic"
    >
      {verses.map((verse, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.5 }}
          className="text-lg text-gray-700"
        >
          {verse || <br />}
        </motion.p>
      ))}
    </motion.div>
  );
}