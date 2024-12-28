import { Heart } from 'lucide-react';

interface PulsingHeartProps {
  show: boolean;
}

export function PulsingHeart({ show }: PulsingHeartProps) {
  return (
    <div className={`transition-all duration-1000 ${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
      <Heart className="w-24 h-24 mx-auto text-red-500 animate-pulse filter drop-shadow-lg" fill="currentColor" />
    </div>
  );
}