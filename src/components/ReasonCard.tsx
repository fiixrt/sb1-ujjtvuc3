import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay: number;
}

export function ReasonCard({ title, description, Icon, delay }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-pink-500" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}